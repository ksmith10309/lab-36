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


};



export default {authorize};
