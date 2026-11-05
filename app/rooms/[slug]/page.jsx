
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rooms } from "../../lib/rooms";
import Navbar from "@/app/components/Navbar";

export function generateStaticParams() {
    return rooms.map((room) => ({
        slug: room.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const room = rooms.find((item) => item.slug === slug);

    return {
        title: room ? `${room.name} | Teeka Resort` : "Room Not Found",
        description: room?.description,
    };
}

const RoomDetailPage = async ({ params }) => {
    const { slug } = await params;

    const room = rooms.find((item) => item.slug === slug);

    if (!room) {
        notFound();
    }

    return (
        <>

            <Navbar />
            <main className="bg-white">

                {/* Page Heading */}
                <section className="bg-[#2B140C] px-5 py-20 text-center text-white sm:py-28">
                    <span className="text-xs uppercase tracking-[5px] text-[#C6A47E]">
                        Accommodation
                    </span>

                    <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl">
                        {room.name}
                    </h1>

                    <div className="mt-6 text-sm text-white/70">
                        <Link href="/" className="hover:text-white">
                            Home
                        </Link>
                        <span className="mx-3">/</span>
                        <Link href="/#rooms" className="hover:text-white">
                            Rooms
                        </Link>
                        <span className="mx-3">/</span>
                        <span className="text-[#C6A47E]">{room.name}</span>
                    </div>
                </section>

                {/* Room Gallery */}
                <section className="px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
                    <div className="mx-auto max-w-[1400px]">

                        <div className="grid gap-4 md:grid-cols-2">

                            {/* Main Image */}
                            <div className="relative h-[350px] overflow-hidden md:h-[560px]">
                                <Image
                                    src={room.gallery[0]}
                                    alt={room.name}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Other Images */}
                            <div className="grid grid-cols-2 gap-4 md:grid-rows-2">
                                {room.gallery.slice(1, 3).map((image, index) => (
                                    <div
                                        key={image}
                                        className={`relative min-h-[170px] overflow-hidden md:min-h-0 ${index === 0 ? "md:col-span-2" : ""
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${room.name} view ${index + 2}`}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 40vw"
                                            className="object-cover transition duration-700 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Room Information */}
                        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_350px] lg:gap-20">

                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[4px] text-[#96734F]">
                                    Experience Comfort
                                </span>

                                <h2 className="mt-4 font-serif text-4xl text-[#29241F] sm:text-5xl">
                                    About This Room
                                </h2>

                                <p className="mt-7 text-sm leading-8 text-[#69645E] sm:text-base">
                                    {room.description}
                                </p>

                                {/* Amenities */}
                                <div className="mt-14">
                                    <h3 className="font-serif text-3xl text-[#29241F]">
                                        Room Amenities
                                    </h3>

                                    <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3">
                                        {room.amenities.map((amenity) => (
                                            <div
                                                key={amenity}
                                                className="flex items-center gap-3 border-b border-[#E9E5DF] pb-4 text-sm text-[#62594F]"
                                            >
                                                <span className="text-[#96734F]">✦</span>
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tariff */}
                                <div className="mt-14">
                                    <h3 className="font-serif text-3xl text-[#29241F]">
                                        Room Tariff
                                    </h3>

                                    <div className="mt-7 overflow-hidden border border-[#E9E5DF]">
                                        {[
                                            ["Single Occupancy", room.tariffs.single],
                                            ["Double Occupancy", room.tariffs.double],
                                            ["Extra Bed Charge", room.tariffs.extraBed],
                                        ]
                                            .filter((item) => item[1] !== undefined)
                                            .map(([label, price]) => (
                                                <div
                                                    key={label}
                                                    className="flex justify-between gap-4 border-b border-[#E9E5DF] px-5 py-5 last:border-0 sm:px-7"
                                                >
                                                    <span className="text-sm text-[#62594F]">
                                                        {label}
                                                    </span>

                                                    <span className="font-semibold text-[#2B140C]">
                                                        ${price}
                                                    </span>
                                                </div>
                                            ))}
                                    </div>

                                    <p className="mt-4 text-xs text-gray-400">
                                        Please contact the hotel for availability and applicable
                                        taxes.
                                    </p>
                                </div>
                            </div>

                            {/* Booking Card */}
                            <aside>
                                <div className="sticky top-24 border border-[#E9E5DF] p-7 sm:p-9">

                                    <span className="text-xs uppercase tracking-[3px] text-[#96734F]">
                                        Room Reservation
                                    </span>

                                    <p className="mt-5 font-serif text-4xl text-[#2B140C]">
                                        ${room.startingPrice}
                                    </p>

                                    <span className="text-xs text-gray-500">
                                        Starting price / Per Night
                                    </span>

                                    <div className="my-7 border-t border-[#E9E5DF]" />

                                    <h4 className="font-serif text-xl text-[#29241F]">
                                        {room.name}
                                    </h4>

                                    <p className="mt-3 text-sm leading-7 text-gray-500">
                                        Enjoy a comfortable and memorable stay with our
                                        thoughtfully designed accommodation.
                                    </p>

                                    <div className="mt-7 space-y-4 text-sm text-[#62594F]">
                                        <div className="flex justify-between">
                                            <span>Room Type</span>
                                            <span className="font-medium text-[#29241F]">
                                                {room.name}
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span>Starting Price</span>
                                            <span className="font-medium text-[#29241F]">
                                                ${room.startingPrice}
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/contact?room=${room.slug}`}
                                        className="mt-9 flex w-full items-center justify-center gap-3 bg-[#2B140C] px-6 py-5 text-xs font-semibold uppercase tracking-[2px] text-white transition hover:bg-[#96734F]"
                                    >
                                        Book Now <span>→</span>
                                    </Link>

                                    <p className="mt-5 text-center text-xs text-gray-400">
                                        Contact us for reservations and inquiries.
                                    </p>
                                </div>
                            </aside>

                        </div>
                    </div>
                </section>

                {/* Back to Rooms */}
                <section className="bg-[#F7F5F1] px-5 py-16 text-center">
                    <p className="text-xs uppercase tracking-[4px] text-[#96734F]">
                        Explore More
                    </p>

                    <h2 className="mt-4 font-serif text-3xl text-[#29241F] sm:text-4xl">
                        Discover Our Other Rooms
                    </h2>

                    <Link
                        href="/#rooms"
                        className="mt-7 inline-flex bg-[#2B140C] px-8 py-4 text-xs uppercase tracking-[2px] text-white transition hover:bg-[#96734F]"
                    >
                        View All Rooms →
                    </Link>
                </section>

            </main>
        </>
    );
};

export default RoomDetailPage;
