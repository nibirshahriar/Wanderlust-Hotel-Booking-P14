import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaEye, FaSuitcaseRolling } from "react-icons/fa";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const bookings = await res.json();

  // Empty State
  if (!bookings?.length) {
    return (
      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 rounded-full bg-cyan-100 p-8">
          <FaSuitcaseRolling className="text-6xl text-cyan-500" />
        </div>

        <h1 className="mb-3 text-4xl font-bold text-gray-800">
          No Bookings Yet
        </h1>

        <p className="mb-8 max-w-lg text-lg text-gray-500">
          You havent booked any travel destinations yet. Discover breathtaking
          places and start planning your next adventure.
        </p>

        <Link href="/destinations">
          <Button
            className="bg-cyan-500 px-8 text-white hover:bg-cyan-600"
            size="lg"
          >
            Explore Destinations
          </Button>
        </Link>
      </div>
    );
  }

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
            className="flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md md:flex-row md:items-center md:justify-between"
          >
            {/* Left Section */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative h-32 w-full overflow-hidden rounded-lg sm:w-48">
                <Image
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span
                  className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    booking.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {booking.status}
                </span>

                <h3 className="text-2xl font-semibold text-gray-800">
                  {booking.destinationName}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <FaCalendarAlt />
                  <span>Departure: {booking.departureDate}</span>
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  Booking ID: {booking._id}
                </div>

                <p className="mt-3 text-3xl font-bold text-cyan-500">
                  ${booking.price}
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex gap-3">
              <BookingCancelAlert bookingId={booking._id} />

              <Link
                href={`/destinations/${booking.destinationId}`}
                className="flex items-center gap-2 rounded bg-cyan-500 px-4 py-2 text-white transition hover:bg-cyan-600"
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
