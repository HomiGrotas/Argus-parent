import "../../css/navbar.css"

const Navbar = () => {
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          Argus
        </a>

        <div className="navigation-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}


export default Navbar;