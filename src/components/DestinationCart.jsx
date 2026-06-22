import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaRegClock, FaStar } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi"; // Better match for the arrow in your mockup

const DestinationCard = ({ destination }) => {
  const { _id, destinationName, country, price, duration, imageUrl } =
    destination;

  return (
    <div className="group overflow-hidden bg-white transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden rounded-md">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Rating Overlay */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded bg-white/95 px-2 py-0.5 text-xs font-semibold text-gray-800 shadow-sm">
          <span>4.8</span>
          <FaStar className="text-black text-[10px]" />
        </div>
      </div>

      {/* Content Container */}
      <div className="py-4">
        {/* Country Location */}
        <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium uppercase tracking-wider">
          <FaMapMarkerAlt className="text-gray-400 text-[10px]" />
          <span>{country}</span>
        </div>

        {/* Title and Price Info Row */}
        <div className="mt-1 flex items-start justify-between gap-2">
          <div>
            <h3 className="line-clamp-1 text-base font-bold text-gray-800 tracking-tight">
              {destinationName}
            </h3>

            {/* Duration directly underneath Title */}
            <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
              <FaRegClock className="text-gray-400 text-[11px]" />
              <span>{duration} Days</span>
            </div>
          </div>

          {/* Price Alignment */}
          <div className="text-right shrink-0">
            <span className="text-lg font-extrabold text-gray-900">
              ${price}
            </span>
            <span className="text-[11px] text-gray-400 font-medium">
              /Person
            </span>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-4 border-t border-gray-100 pt-3">
          <Link
            href={`/destinations/${_id}`}
            className="inline-flex items-center gap-0.5 text-xs font-bold text-cyan-500 tracking-wide transition hover:text-cyan-600"
          >
            BOOK NOW
            <FiArrowUpRight className="text-sm stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
