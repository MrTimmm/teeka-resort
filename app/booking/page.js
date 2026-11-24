import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { rooms } from "@/app/lib/rooms";
import BookingForm from "@/app/components/BookingForm";

export const metadata = {
  title: "Book Your Stay | Teeka Resort",
  description:
    "Reserve your luxury escape at Teeka Resort. Select your room, dates, and guests to begin your booking.",
};

const BookingPage = async ({ searchParams }) => {
  const { room: roomSlug } = await searchParams;

  const selectedRoom = roomSlug
    ? rooms.find((item) => item.slug === roomSlug)
    : null;

  // If a room slug was provided but doesn't exist, show 404
  if (roomSlug && !selectedRoom) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Page Heading */}
        <section className="bg-[#2B140C] px-5 py-20 text-center text-white sm:py-28">
          <span className="text-xs uppercase tracking-[5px] text-[#C6A47E]">
            Reservations
          </span>

          <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl">
            Book Your Stay
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
            <span className="text-[#C6A47E]">Booking</span>
          </div>
        </section>

        {/* Booking Section */}
        <section className="px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_380px] lg:gap-20">
            {/* Booking Form */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[4px] text-[#96734F]">
                Step 1 of 1
              </span>

              <h2 className="mt-4 font-serif text-4xl text-[#29241F] sm:text-5xl">
                Reservation Details
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#69645E] sm:text-base">
                Please provide your details below. Our team will confirm
                availability and reach out within 24 hours to finalize your
                reservation.
              </p>

              <BookingForm
                rooms={rooms}
                selectedRoomSlug={selectedRoom?.slug || ""}
              />
            </div>

            {/* Summary Sidebar */}
            <aside>
              <div className="sticky top-24 border border-[#E9E5DF] p-7 sm:p-9">
                <span className="text-xs uppercase tracking-[3px] text-[#96734F]">
                  Your Selection
                </span>

                {selectedRoom ? (
                  <>
                    <p className="mt-5 font-serif text-3xl text-[#2B140C]">
                      {selectedRoom.name}
                    </p>

                    <span className="text-xs text-gray-500">
                      Starting from ${selectedRoom.startingPrice} / night
                    </span>

                    <div className="my-7 border-t border-[#E9E5DF]" />

                    <div className="space-y-4 text-sm text-[#62594F]">
                      <div className="flex justify-between">
                        <span>Room Type</span>
                        <span className="font-medium text-[#29241F]">
                          {selectedRoom.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Starting Price</span>
                        <span className="font-medium text-[#29241F]">
                          ${selectedRoom.startingPrice}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/rooms/${selectedRoom.slug}`}
                      className="mt-7 inline-block text-xs uppercase tracking-[2px] text-[#96734F] underline underline-offset-4 hover:text-[#2B140C]"
                    >
                      View room details →
                    </Link>
                  </>
                ) : (
                  <p className="mt-5 text-sm leading-7 text-gray-500">
                    Select a room in the form to see your booking summary here.
                  </p>
                )}

                <div className="my-7 border-t border-[#E9E5DF]" />

                <div className="space-y-3 text-xs text-gray-400">
                  <p>✓ Best rate guaranteed</p>
                  <p>✓ No prepayment required</p>
                  <p>✓ Free cancellation up to 48 hours</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-[#F7F5F1] px-5 py-16 text-center">
          <p className="text-xs uppercase tracking-[4px] text-[#96734F]">
            Need Assistance?
          </p>

          <h2 className="mt-4 font-serif text-3xl text-[#29241F] sm:text-4xl">
            We're Here to Help
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#69645E]">
            Have questions about your reservation? Our concierge team is
            available to assist you with special requests and personalized
            arrangements.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex bg-[#2B140C] px-8 py-4 text-xs uppercase tracking-[2px] text-white transition hover:bg-[#96734F]"
          >
            Contact Us →
          </Link>
        </section>
      </main>
    </>
  );
};

export default BookingPage;