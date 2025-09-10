"use client";

import * as React from "react";
import { useDate } from "@/src/hook/useDate";
import { Calendar } from "@/components/ui/calendar";

export default function Calendar18() {
  const { date, setDate } = useDate();
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      required
      className="rounded-lg border-1 border-[#323238] [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
      buttonVariant="ghost"
    />
  );
}
