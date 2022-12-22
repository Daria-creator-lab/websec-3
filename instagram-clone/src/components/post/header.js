import { Link } from 'react-router-dom';

export default function Header({ username }) {
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <p className="mr-3">Click me</p>
        <Link to={`/p/${username}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={`/favicon.ico`}
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}