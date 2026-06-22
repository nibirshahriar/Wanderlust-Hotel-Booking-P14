import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/destinations"
              className="transition hover:text-blue-600"
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link href="/bookings" className="transition hover:text-blue-600">
              My Bookings
            </Link>
          </li>
          <li>
            <Link href="/admin" className="transition hover:text-blue-600">
              Admin
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={"/assets/wanderlast.png"}
            alt="Wanderlust Logo"
            width={130}
            height={60}
            priority
          />
        </div>

        {/* Right Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/profile" className="hover:text-blue-600">
              Profile
            </Link>
          </li>

          <li>
            <Link href="/login" className="hover:text-blue-600">
              Login
            </Link>
          </li>

          <li>
            <Link href="/signup" className="hover:text-blue-600">
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
