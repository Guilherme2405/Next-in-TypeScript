"use client";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";

import { useDate } from "@/src/hook/useDate";

export default function Calendar20() {
  const { date, setDate, selectedTime, setSelectedTime } = useDate();

  useEffect(() => {
    console.log(selectedTime);
  }, []);

  const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const totalMinutes = i * 60;
    const hour = Math.floor(totalMinutes / 60) + 9;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  });

  const bookedDates = Array.from(
    { length: 3 },
    (_, i) => new Date(2025, 5, 17 + i)
  );

  return (
    <Card className="gap-0 p-0">
      <form action="">
        <CardContent className="relative p-0 md:pr-48">
          <div className="p-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
              required
              disabled={bookedDates}
              showOutsideDays={false}
              modifiers={{
                booked: bookedDates,
              }}
              modifiersClassNames={{
                booked: "[&>button]:line-through opacity-100",
              }}
              className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
              formatters={{
                formatWeekdayName: (date) => {
                  return date.toLocaleString("pt-BR", { weekday: "short" });
                },
              }}
            />
          </div>
          <div className="overflow-y-auto scrollbar-hide inset-y-0 right-0 flex max-h-72 w-full flex-col gap-4  border-t p-6 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l border-[#323238]">
            <div className="grid gap-2">
              {timeSlots.map((time) => (
                <div key={time}>
                  <RadioGroup
                    value={selectedTime}
                    onValueChange={(value) => setSelectedTime(value)}
                  >
                    <RadioGroupItem
                      value={time}
                      id={time}
                      className="w-full py-2 shadow-none cursor-pointer border-2 border-transparent bg-[#323238] focus:bg-transparent rounded-lg focus:border-2 focus:border-[#00B37E] text-white 
                      focus:text-[#00B37E] focus:ring-0"
                    >
                      {time}
                    </RadioGroupItem>
                  </RadioGroup>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 border-t justify-between px-6 !py-5 md:flex-row border-[#323238]">
          <div className="text-sm">
            {date && selectedTime ? (
              <>
                Seu evento está agendado para{" "}
                <span className="font-medium">
                  {" "}
                  {date?.toLocaleDateString("pt-BR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}{" "}
                </span>
                as <span className="font-medium">{selectedTime}</span>.
              </>
            ) : (
              <>Selecione uma data e hora para seu evento.</>
            )}
          </div>
          <Button
            disabled={!date || !selectedTime}
            className="w-full md:ml-auto md:w-auto cursor-pointer"
            variant="outline"
          >
            Próximo passo
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
