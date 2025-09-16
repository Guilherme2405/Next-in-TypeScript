"use client";
import { createContext, useState, useEffect } from "react";

export const DateContext = createContext<{
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
}>({
  date: null,
  setDate: () => {},
  selectedTime: "09:00",
  setSelectedTime: () => {},
});

export const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("09:00");

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <DateContext.Provider
      value={{ date, setDate, selectedTime, setSelectedTime }}
    >
      {children}
    </DateContext.Provider>
  );
};
