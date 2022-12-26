import { useState } from 'react';
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers
} from '../../services/firebase';
import React from 'react'
const src = require('../../images/favicon.ico');

export default function SuggestedProfile({ profileDocId, username, profileId, userId, loggedInUserDocId}) {
    const [followed, setFollowed] = useState(false);

    async function handleFollowUser() {
      setFollowed(true);
      await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
      await updateFollowedUserFollowers(profileDocId, userId, false);
    }
  
    return !followed ? (
      <div className="flex items-center align-items justify-between">
        <div className="flex items-center justify-between">
          <img
            className="rounded-full w-8 flex mr-3"
            src={src}
          />
          <p className="font-bold text-sm">{username}</p>
        </div>
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    ) : null;
  }