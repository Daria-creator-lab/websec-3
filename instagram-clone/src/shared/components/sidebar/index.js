import User from './user';
import Suggestions from './suggestions';
import useUser from '../../hooks/use-user';
import React from 'react'

export default function Sidebar() {
    const { 
        user: { docId, fullName, username, userId, following} 
    } = useUser();

    //console.log('following', following)

    return (
        <div className="p-4">
          <User username={username} fullName={fullName} />
          <Suggestions userId={userId} following={following} loggedInUserDocId={docId}/>
        </div>
    );
}
