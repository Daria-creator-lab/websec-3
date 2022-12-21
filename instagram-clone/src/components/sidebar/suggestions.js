import { useState, useEffect } from 'react';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from './suggested-profile';

export default function Suggestions({ userId, following}) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }

    if (userId) {
      suggestedProfiles();
    }

    //console.log('profiles', profiles);
  }, [userId]);

  return !profiles ? (
    <p className='font-bold'>loading...</p>
  ) : profiles.length > 0 ? (
    <>
      <p className="font-bold">Suggestions for you</p>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
          />
        ))}
      </div>
    </>
  ) : null;
}
