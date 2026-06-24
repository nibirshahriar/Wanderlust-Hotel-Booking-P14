import BookingCard from "@/components/BookingCard";
import { DeleteDialog } from "@/components/DeleteDialog";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaCheck } from "react-icons/fa";

const DestinationDetailPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);
  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const destination = await res.json();

  const {
    destinationName,
    country,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
    category,
  } = destination;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Back + Actions */}
      <div className="mb-6 flex items-center justify-between">
        <Link href="/destinations">
          <button className="text-sm text-gray-600 hover:text-black">
            ← Back to Destinations
          </button>
        </Link>

        <div className="flex gap-3">
          {/* <button className="rounded border px-4 py-2 text-sm">✏ Edit</button> */}
          <EditModal destination={destination} />

          <DeleteDialog destination={destination} />
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative mb-10 h-[450px] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
        />

        {/* Category Badge */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            {category}
          </span>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <FaMapMarkerAlt />
            <span>{country}</span>
          </div>

          <h1 className="mb-4 text-5xl font-light">{destinationName}</h1>

          <div className="mb-8 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FaStar className="text-green-500" />
              <span>4.9 (234 reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{duration} Days</span>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold">Overview</h2>

            <p className="leading-8 text-gray-600">{description}</p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="mb-5 text-2xl font-semibold">Highlights</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Luxury beachfront accommodation</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Visit Uluwatu Temple at sunset</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Traditional Balinese spa treatment</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Private beach dinner experience</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Sunrise trek to Mount Batur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <BookingCard destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailPage;
