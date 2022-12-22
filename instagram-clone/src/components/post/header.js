export default function Header({ username }) {
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <img
          className="rounded-full h-8 w-8 flex mr-3"
          src={`/favicon.ico`}
        />
        <p className="font-bold">{username}</p>
      </div>
    </div>
  );
}