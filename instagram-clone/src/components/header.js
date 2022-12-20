import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Header() {
  return (
    <div className="h-16 bg-white">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="flex items-center">
            <Link to={ROUTES.DASHBOARD}>
                <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
