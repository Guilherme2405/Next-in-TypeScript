"use client";
import { createContext, useState, useEffect } from "react";

export const DateContext = createContext<{
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
}>({
  date: new Date(),
  setDate: () => {},
  selectedTime: "09:00",
  setSelectedTime: () => {},
});

export const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("09:00");

  useEffect(() => {
    console.log(selectedTime);
  }, [selectedTime]);

  return (
    <DateContext.Provider
      value={{ date, setDate, selectedTime, setSelectedTime }}
    >
      {children}
    </DateContext.Provider>
  );
};
