import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <img src="/images/LOGO.AGP.jpg" alt="AGP Lady Lingerie Logo" />
        </Link>
      </div>
      <div className="navegacion">
        <ul className="opciones">
          <li>
            <Link href="/pijamas">Pijamas</Link>
          </li>
          <li>
            <Link href="/lenceria">Lenceria</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

