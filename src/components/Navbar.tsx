import SearchIcon from "./SearchIcon";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <a href="/">
            <strong>Navbar</strong>
          </a>
        </ul>
        <ul>
          <li>
            <a href="/Docs">Documentaion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Login">
              Log In
            </a>
          </li>
          <li>
            <SearchIcon />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
