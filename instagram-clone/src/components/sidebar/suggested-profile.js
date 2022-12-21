import { useState } from 'react';

export default function SuggestedProfile({ profileDocId, username, profileId, buserId}) {
    const [followed, setFollowed] = useState(false);
  
    return !followed ? (
      <div className="flex items-center align-items justify-between">
        <div className="flex items-center justify-between">
          <img
            className="rounded-full w-8 flex mr-3"
            src={`/favicon.ico`}
          />
          <p className="font-bold text-sm">{username}</p>
        </div>
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={() => console.log('Follow this user!')}
        >
          Follow
        </button>
      </div>
    ) : null;
  }