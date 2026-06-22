import DestinationCart from "@/components/DestinationCart";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destinations");
  const destinations = await res.json();
  return (
    <div className="container mx-auto py-10">
      <h2 className="font-bold text-2xl mb-6">All Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <DestinationCart key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
