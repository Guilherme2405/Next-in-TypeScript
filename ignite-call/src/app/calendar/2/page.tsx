"use client";
import { useState } from "react";

import { Avatar } from "@/src/components/avatar";
import Calendar20 from "@/components/calendar-20";

export default function Calendar2() {
  const [selectedTime, setSelectedTime] = useState<string | null>("9:00");

  return (
    <div className="w-full flex flex-col flex-wrap items-center justify-center gap-6 pb-6">
      <div className="flex flex-col flex-wrap items-center justify-center gap-2">
        <Avatar />
        <h1 className="text-2xl font-bold text-white">jhon doe</h1>
        <span className="text-sm text-gray-400">CTO @ignite-call</span>
      </div>

      <div>
        <Calendar20 />
      </div>
    </div>
  );
}
