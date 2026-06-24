import DestinationCart from "@/components/DestinationCart";
import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons";
import Link from "next/link";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {
    next: { revalidate: 60 },
  });

  const destinations = await res.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Destinations
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <Link href="/destinations">
          <Button
            variant="outline"
            className="border-sky-500 text-sky-500 hover:bg-sky-50"
          >
            All Destinations
          </Button>
        </Link>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations?.map((destination) => (
          <DestinationCart key={destination._id} destination={destination} />
        ))}
      </div>

      {/* Bottom Navigation Design */}
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex items-center justify-between">
          {/* Counter */}
          <p className="text-sm text-gray-500">1/{destinations.length}</p>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-500 transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft width={18} height={18} />
            </button>

            <button
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-500 transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight width={18} height={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Why Choose Wanderlust */}
      <section className="mt-24 bg-sky-50 rounded-2xl px-6 md:px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Wanderlust
          </h2>
          <p className="text-gray-500 mt-2">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
              🛡️
            </div>
            <h3 className="font-semibold text-lg mb-2">Safe & Secure</h3>
            <p className="text-gray-500 text-sm">
              Your safety is our priority with comprehensive travel insurance
              and 24/7 support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
              📖
            </div>
            <h3 className="font-semibold text-lg mb-2">Expert Guides</h3>
            <p className="text-gray-500 text-sm">
              Local experts who bring destinations to life with authentic
              cultural insights.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
              🎧
            </div>
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-sm">
              Round-the-clock customer service to assist you wherever your
              journey takes you.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              What Travelers Say
            </h2>
            <p className="text-gray-500 mt-2">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <ChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-5 items-center bg-white p-5 rounded-xl border">
            <div>
              <p className="text-gray-600 italic">
                The Bali trip was absolutely magical! Every detail was
                perfectly planned. The resorts were luxurious and the cultural
                experiences were unforgettable.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-sky-600">Michael Chen</h4>
                <p className="text-sm text-gray-500">Singapore</p>
              </div>
            </div>

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="traveler"
              className="w-28 h-28 object-cover rounded"
            />
          </div>

          <div className="flex gap-5 items-center bg-white p-5 rounded-xl border">
            <div>
              <p className="text-gray-600 italic">
                Swiss Alps Adventure exceeded all expectations. The mountain
                views were breathtaking and our guide was incredibly
                knowledgeable.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-sky-600">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">New York, USA</p>
              </div>
            </div>

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="traveler"
              className="w-28 h-28 object-cover rounded"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Featured;
