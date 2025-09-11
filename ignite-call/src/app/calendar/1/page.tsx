"use client";
import { Avatar } from "@/src/components/avatar";
import Calendar18 from "@/components/calendar-18";

export default function Calendar1() {


  return (
    <div className="w-full flex flex-col flex-wrap items-center justify-center gap-6 pb-6">
      <div className="flex flex-col flex-wrap items-center justify-center gap-2">
        <Avatar />
        <h1 className="text-2xl font-bold text-white">jhon doe</h1>
        <span className="text-sm text-gray-400">CTO @ignite-call</span>
      </div>

      <div>
        <Calendar18 />
      </div>
    </div>
  );
}
