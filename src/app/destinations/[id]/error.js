"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { TriangleExclamation } from "@gravity-ui/icons";

const ErrorPage = ({ reset }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-sky-50 px-4">
      <div className="max-w-2xl text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-red-100 flex items-center justify-center">
            <TriangleExclamation
              width={60}
              height={60}
              className="text-red-500"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Journey Interrupted
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          We couldnt load this travel experience right now. Dont worry, your
          next adventure is just a click away.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={() => reset()} className="bg-sky-600 text-white">
            Try Again
          </Button>

          <Link href="/">
            <Button variant="outline">Back To Home</Button>
          </Link>
        </div>

        {/* Travel Card */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-6 border border-sky-100">
          <h3 className="text-xl font-semibold text-sky-600">✈️ Travel Tip</h3>

          <p className="mt-2 text-gray-600">
            Sometimes even the best journeys face unexpected detours. Refresh
            the page or explore other destinations while we get things back on
            track.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
