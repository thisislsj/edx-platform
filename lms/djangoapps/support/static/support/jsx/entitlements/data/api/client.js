import 'whatwg-fetch'; // fetch polyfill
import Cookies from 'js-cookie';

import endpoints from './endpoints';

export function requestEntitlements(usernameOrEmail) {
  return fetch(
    `${endpoints.entitlementList}/${usernameOrEmail}`, {
      credentials: 'same-origin',
      method: 'get'
    },
  );
}

export function createEntitlement(courseUuid, user, mode, reason, comments) {
  return fetch(
    `${endpoints.entitlementList}/${user}`, {
      credentials: 'same-origin',
      method: 'post',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify({
        course_uuid: courseUuid,
        user: user,
        mode: mode,
        reason: reason,
        comments: comments
      })
    }
  );
}

export function updateEntitlement(email, reason, entitlementUuid, comments) {
  //Only requires an 'email' parameter to construct the url, not actually sent in the body
  return fetch(
    `${endpoints.entitlementList}/${email}`, {
      credentials: 'same-origin',
      method: 'put',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body:JSON.stringify({
      	entitlement_uuid: entitlementUuid,
        reason: reason,
      	comments: comments
      }),
    }
  );
}