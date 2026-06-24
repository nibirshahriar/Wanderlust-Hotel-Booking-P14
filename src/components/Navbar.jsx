"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

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
            <Link
              href="/my-bookings"
              className="transition hover:text-blue-600"
            >
              My Bookings
            </Link>
          </li>

          <li>
            <Link
              href="/add-destination"
              className="transition hover:text-blue-600"
            >
              Add Destination
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/Wanderlast.png"
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

          {user ? (
            <>
              <li>
                <Avatar referrerPolicy="no-referrer">
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </li>

              <li>
                <Button
                  className="bg-red-500 text-white hover:bg-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-4 font-medium text-gray-700">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/destinations" onClick={() => setIsOpen(false)}>
                Destinations
              </Link>
            </li>

            <li>
              <Link href="/my-bookings" onClick={() => setIsOpen(false)}>
                My Bookings
              </Link>
            </li>

            <li>
              <Link href="/add-destination" onClick={() => setIsOpen(false)}>
                Add Destination
              </Link>
            </li>

            <li>
              <Link href="/profile" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
            </li>

            {user ? (
              <>
                <li className="flex items-center gap-3">
                  <Avatar referrerPolicy="no-referrer">
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>

                  <span>{user?.name}</span>
                </li>

                <li>
                  <Button
                    className="w-full bg-red-500 text-white hover:bg-red-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </li>

                <li>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
