export default function User({ username, fullName }) {
    // console.log(123, username, fullName);
    return !username || !fullName ? (
        <p className='font-bold'>loading...</p>
    ) : (
        <div className="grid grid-cols-4 gap-4 mb-6 items-center">
            <img className="rounded-full w-16 flex mr-3"src={`/favicon.ico`}/>
            <div className="col-span-3">
                <p className="font-bold text-sm">{username}</p>
                <p className="text-sm">{fullName}</p>
            </div>
        </div>
    );
}


