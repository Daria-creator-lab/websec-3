import { Link } from 'react-router-dom';
import React from 'react'
const src = require('../../images/favicon.ico');

export default function User({ username, fullName }) {
    // console.log(123, username, fullName);
    return !username || !fullName ? (
        <p className='font-bold'>loading...</p>
    ) : (
        <>
            <p className="mr-3">Click me</p>
            <Link to={`/p/${username}`}>
                <div className="grid grid-cols-4 gap-4 mb-6 items-center">
                    <img className="rounded-full w-16 flex mr-3"src={src}/>
                    <div className="col-span-3">
                        <p className="font-bold text-sm">{username}</p>
                        <p className="text-sm">{fullName}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}


