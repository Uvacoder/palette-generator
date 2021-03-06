import { h } from "preact";
import { Link } from "preact-router/match";

const Header = () => (
  <header class="header">
    <nav>
      <Link activeClassName="active" href="/">
        Home
      </Link>
      <Link activeClassName="active" href="/about">
        About
      </Link>
    </nav>
  </header>
);

export default Header;
