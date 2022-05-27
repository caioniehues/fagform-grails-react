
import {checkResponseStatus} from './../handlers/responseHandlers';
import headers from './../security/headers';
import 'whatwg-fetch';
import qs from 'qs';


export default {
  logIn(auth) { 
    localStorage.auth = JSON.stringify(auth);
  },

  logOut() { 
    delete localStorage.auth;
  },

  refreshToken() { 
    return fetch(
      `localhost:8080/oauth/access_token`,
      { method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: qs.stringify({ 
          grant_type: 'refresh_token',
          refresh_token: JSON.parse(localStorage.auth).refresh_token
        })
      })
      .then(checkResponseStatus)
      .then((a) => localStorage.auth = JSON.stringify(a))
      .catch(() => { throw new Error("Unable to refresh!")})
  },

  loggedIn() {  
    return localStorage.auth && fetch( 
        {headers: headers()})
        .then(checkResponseStatus)
        .then(() => { return true })
        .catch(this.refreshToken)
        .catch(() => { return false });
  }
};