import { useState, useEffect, useContext } from 'react';
import useUser from '../../hooks/use-user';
import { isUserFollowingProfile, toggleFollow } from '../../services/firebase';
import UserContext from '../../context/user';
import React from 'react'
const src = require(`../../images/favicon.ico`);

export default function Header({
  photosCount,
  followerCount,
  setFollowerCount,
  profile: {
    docId: profileDocId,
    userId: profileUserId,
    fullName,
    followers,
    following,
    username: profileUsername
  }
}) {
  const { user: loggedInUser } = useContext(UserContext);
  const { user } = useUser(loggedInUser?.uid);
  const [isFollowingProfile, setIsFollowingProfile] = useState(null);
  const activeBtnFollow = user?.username && user?.username !== profileUsername;

  const handleToggleFollow = async () => {
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    setFollowerCount({
      followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1
    });
    await toggleFollow(isFollowingProfile, user.docId, profileDocId, profileUserId, user.userId);
  };

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(user.username, profileUserId);
      setIsFollowingProfile(!!isFollowing);
    };

    if (user?.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user?.username, profileUserId]);

  return (
    <div className="grid grid-cols-3">
        <div className="container flex justify-center items-center">
            {profileUsername ? (
            <img className="rounded-full h-40 w-40 flex" src={src}/>
            ) : (
                <p className='font-bold'>loading...</p>
            )}
        </div>
        <div className="flex items-center justify-center flex-col ">
            <div className="container flex items-center">
                <p className="text-2xl mr-4">{profileUsername}</p>
                {activeBtnFollow && isFollowingProfile === null ? (
                    <p className='font-bold'>loading...</p>
                ) : (
                    activeBtnFollow && (
                    <button
                        className="text-xs font-bold text-blue-medium"
                        type="button"
                        onClick={handleToggleFollow}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleToggleFollow();
                            }
                        }}
                    >
                        {isFollowingProfile ? 'Unfollow' : 'Follow'}
                    </button>
                    )
                )}
            </div>
            <div className="container flex mt-4">
            {!followers || !following ? (
                <p className='font-bold'>loading...</p>
            ) : (
                <>
                <p className="mr-10">
                    <span className="font-bold">{photosCount}</span> photos
                </p>
                <p className="mr-10">
                    <span className="font-bold">{followerCount}</span>
                    {followerCount === 1 ? `follower` : `followers`}
                </p>
                <p className="mr-10">
                    <span className="font-bold">{following?.length}</span> following
                </p>
                </>
            )}
            </div>
            <div className="container mt-4">
            <p className="font-medium">{!fullName ? <p className='font-bold'>loading...</p> : fullName}</p>
            </div>
        </div>
    </div>
  );
}

