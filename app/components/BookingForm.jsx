"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const BookingForm = ({ rooms, selectedRoomSlug }) => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    room: selectedRoomSlug || "",
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    name: "",
    email: "",
    phone: "",
    requests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with your API call / server action
    console.log("Booking submitted:", form);
    setSubmitted(true);
  };

  const inputClass =
    "w-full border border-[#E9E5DF] bg-white px-4 py-3 text-sm text-[#29241F] outline-none transition focus:border-[#96734F]";
  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-[2px] text-[#62594F]";

  if (submitted) {
    return (
      <div className="mt-10 border border-[#E9E5DF] bg-[#F7F5F1] p-8 text-center sm:p-12">
        <h3 className="font-serif text-3xl text-[#2B140C]">
          Request Received
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#69645E]">
          Thank you, {form.name || "guest"}. Our team will contact you shortly
          at {form.email || "your email"} to confirm availability.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-7 inline-flex bg-[#2B140C] px-8 py-4 text-xs uppercase tracking-[2px] text-white transition hover:bg-[#96734F]"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
      {/* Stay Details */}
      <div>
        <h3 className="mb-5 font-serif text-2xl text-[#29241F]">
          Stay Details
        </h3>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="room" className={labelClass}>
              Room
            </label>
            <select
              id="room"
              name="room"
              value={form.room}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select a room</option>
              {rooms.map((room) => (
                <option key={room.slug} value={room.slug}>
                  {room.name} — from ${room.startingPrice}/night
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="checkIn" className={labelClass}>
              Check-in
            </label>
            <input
              id="checkIn"
              name="checkIn"
              type="date"
              value={form.checkIn}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="checkOut" className={labelClass}>
              Check-out
            </label>
            <input
              id="checkOut"
              name="checkOut"
              type="date"
              value={form.checkOut}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="adults" className={labelClass}>
              Adults
            </label>
            <input
              id="adults"
              name="adults"
              type="number"
              min={1}
              max={10}
              value={form.adults}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="children" className={labelClass}>
              Children
            </label>
            <input
              id="children"
              name="children"
              type="number"
              min={0}
              max={10}
              value={form.children}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Guest Information */}
      <div>
        <h3 className="mb-5 font-serif text-2xl text-[#29241F]">
          Guest Information
        </h3>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className={labelClass}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+1 555 000 0000"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="requests" className={labelClass}>
              Special Requests (optional)
            </label>
            <textarea
              id="requests"
              name="requests"
              rows={4}
              value={form.requests}
              onChange={handleChange}
              placeholder="Airport pickup, late check-in, dietary needs..."
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 bg-[#2B140C] px-6 py-5 text-xs font-semibold uppercase tracking-[2px] text-white transition hover:bg-[#96734F]"
      >
        Request Reservation <span>→</span>
      </button>

      <p className="text-center text-xs text-gray-400">
        Submitting this form does not charge your card. Our team will confirm
        availability before finalizing your reservation.
      </p>
    </form>
  );
};

export default BookingForm;