import Image from "next/image";
import { FaMapMarkerAlt, FaStar, FaCalendarAlt, FaCheck } from "react-icons/fa";

const DestinationDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    cache: "no-store",
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
  } = destination;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Back + Actions */}
      <div className="mb-6 flex items-center justify-between">
        <button className="text-sm text-gray-600 hover:text-black">
          ← Back to Destinations
        </button>

        <div className="flex gap-3">
          <button className="rounded border px-4 py-2 text-sm">✏ Edit</button>

          <button className="rounded border border-red-300 px-4 py-2 text-sm text-red-500">
            🗑 Cancel
          </button>
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
              <span>{duration}</span>
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
        <div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Starting from</p>

            <h2 className="text-4xl font-bold text-cyan-600">${price}</h2>

            <p className="mb-6 text-sm text-gray-500">per person</p>

            <div className="mb-6 rounded border bg-gray-50 p-3 text-sm">
              {departureDate}
            </div>

            <button className="mb-6 w-full rounded bg-cyan-500 py-3 font-medium text-white hover:bg-cyan-600">
              Book Now →
            </button>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Free cancellation up to 7 days</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>Travel insurance included</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
