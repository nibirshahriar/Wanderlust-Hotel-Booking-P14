"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const { data: session, isPending, error, refetch } = authClient.useSession();
  const user = session?.user;

  //   console.log("User from BookingCard:", user);

  const [departureDate, setDepartureDate] = useState(null);

  const { _id, price, destinationName, imageUrl, country } = destination;
  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      imageUrl,
      country,
      price,
      departureDate: new Date(departureDate),
    };
    // console.log("Booking Data:", bookingData);

    // client compo token access
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    // console.log("Booking Response:", data);
    toast.success("Booking successful!");
  };
  return (
    <div>
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Starting from</p>

        <h2 className="text-4xl font-bold text-cyan-600">${price}</h2>

        <p className="mb-6 text-sm text-gray-500">per person</p>

        <div className="mb-6 rounded border bg-gray-50 p-3 text-sm">
          <DateField
            className="w-[256px]"
            name="date"
            value={departureDate}
            onChange={setDepartureDate}
          >
            <Label>Departure Date</Label>
            <DateField.Group>
              <DateField.Input>
                {(segment) => <DateField.Segment segment={segment} />}
              </DateField.Input>
            </DateField.Group>
          </DateField>
        </div>

        <Button
          onClick={handleBooking}
          className="mb-6 w-full rounded bg-cyan-500 py-3 font-medium text-white hover:bg-cyan-600"
        >
          Book Now →
        </Button>

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
  );
};

export default BookingCard;
