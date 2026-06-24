"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Globe, LocationArrow, ArrowRightFromSquare } from "@gravity-ui/icons";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50 px-4 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Animated Icons */}
        <div className="relative flex justify-center items-center mb-10">
          <div className="absolute -top-6 -left-6 animate-bounce">
            <ArrowRightFromSquare
              width={48}
              height={48}
              className="text-sky-500"
            />
          </div>

          <div className="w-40 h-40 rounded-full bg-sky-100 flex items-center justify-center shadow-lg">
            <div className="animate-spin" style={{ animationDuration: "10s" }}>
              <Globe width={90} height={90} className="text-sky-600" />
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 animate-pulse">
            <LocationArrow width={48} height={48} className="text-red-500" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-sky-600 tracking-tight">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          Oops! Destination Not Found
        </h2>

        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Looks like you have wandered off the map. The destination you are
          searching for might have been moved, removed, or never existed.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <Button
              size="lg"
              className="bg-sky-600 text-white hover:bg-sky-700"
            >
              Back To Home
            </Button>
          </Link>

          <Link href="/destinations">
            <Button
              size="lg"
              variant="outline"
              className="border-sky-600 text-sky-600"
            >
              Explore Destinations
            </Button>
          </Link>
        </div>

        {/* Travel Tip Card */}
        <div className="mt-16 rounded-3xl bg-white border border-sky-100 p-8 shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <LocationArrow width={20} height={20} className="text-sky-600" />
            <h3 className="font-bold text-sky-600 text-lg">Travelers Tip</h3>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Every wrong turn can lead to an unforgettable journey. Discover
            breathtaking destinations, create memories, and start planning your
            next adventure today.
          </p>
        </div>

        {/* Floating Decorative Elements */}
        <div className="hidden md:block">
          <div className="absolute top-20 left-20 w-4 h-4 bg-sky-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-24 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-16 w-2 h-2 bg-sky-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
