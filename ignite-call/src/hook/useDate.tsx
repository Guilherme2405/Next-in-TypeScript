
import { useContext } from "react";
import { DateContext } from "@/src/context/DateContext";

export const useDate = () => {
  const { date, setDate, selectedTime, setSelectedTime } = useContext(DateContext);


  return { date, setDate, selectedTime, setSelectedTime };
};