import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="">
      <div className="container flex justify-between items-center">
        <div>
          <Link to="/" className="text-white font-bold text-2xl">
            Flixx
          </Link>
        </div>
        <nav>
          <ul className="flex">
            <li className="ml-5">
              <Link to="/" className="ml-4 hover:text-sky-400">
                Movies
              </Link>
            </li>
            <li className="ml-5">
              <Link className="ml-4 hover:text-sky-400">TV shows</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
