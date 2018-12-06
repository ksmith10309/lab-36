'use strict';

import superagent from 'superagent';

import User from '../model';

// This is currently setup for Google, but we could easily swap it out
// for any other provider or even use a totally different module to
// to do this work.
//
// So long as the method is called "authorize" and we get the request,
// we should be able to roll on our own here...

// Return a user token in the final .then() 

const authorize = (req) => {
  let code = req.query.code;
  console.log('HELLO FROM oauth.js');

  return superagent.post('https://github.com/login/oauth/access_token')
    .send({
      code: code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth`,
    })
    .then(response => {
      console.log('RESPONSE BODY', response.body);
      let githubToken = response.body.access_token;
      return githubToken;
    })
    .then(token => {
      return superagent.get(`https://api.github.com/user?access_token=${token}`)
        .then(response => {
          console.log('RESPONSE AFTER GIVING TOKEN', response.body);
          let user = response.body;
          return user;
        });
    })

    .then( githubUser => {
      return User.createFromOAuth(githubUser);
    })

    
    .then( user => {
      return user.generateToken();
    })
    .catch( error => error );
    
};

export default {authorize};
