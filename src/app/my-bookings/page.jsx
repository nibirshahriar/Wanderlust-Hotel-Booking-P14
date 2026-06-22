import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaEye, FaTimes } from "react-icons/fa";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/bookings/${user?.id}`, {
    cache: "no-store",
  });

  const bookings = await res.json();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-2 text-4xl font-bold">My Bookings</h1>

      <p className="mb-8 text-gray-500">
        Manage and view your upcoming travel plans
      </p>

      <div className="space-y-5">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between"
          >
            {/* Left */}
            <div className="flex gap-4">
              <div className="relative h-28 w-40 overflow-hidden rounded">
                <Image
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span
                  className={`mb-2 inline-block rounded-full px-2 py-1 text-xs ${
                    booking.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {booking.status}
                </span>

                <h3 className="text-2xl font-medium">
                  {booking.destinationName}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <FaCalendarAlt />
                  <span>Departure: {booking.departureDate}</span>
                </div>

                <div className="mt-2 text-sm text-gray-500">
                  Booking ID: {booking._id}
                </div>

                <p className="mt-2 text-3xl font-bold text-cyan-500">
                  ${booking.price}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex gap-3">
              <Button
                variant="bordered"
                className="flex items-center gap-2 rounded border border-red-300 px-4 py-2 text-red-500 hover:bg-red-50"
              >
                <FaTimes />
                Cancel
              </Button>

              <Link
                href={`/destinations/${booking.destinationId}`}
                className="flex items-center gap-2 rounded bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-600"
              >
                <FaEye />
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
