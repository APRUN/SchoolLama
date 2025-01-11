"use client";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 2,
    title: "Math Workshop",
    time: "10:00 AM - 11:30 AM",
    description: "A workshop on advanced math topics.",
  },
  {
    id: 3,
    title: "Science Fair",
    time: "1:00 PM - 3:00 PM",
    description: "Annual school science fair.",
  },
  {
    id: 4,
    title: "History Lecture",
    time: "9:00 AM - 10:00 AM",
    description: "Lecture on World War II history.",
  },
  {
    id: 5,
    title: "Art Exhibition",
    time: "2:00 PM - 4:00 PM",
    description: "Exhibition of student artwork.",
  },
  {
    id: 6,
    title: "Music Concert",
    time: "5:00 PM - 7:00 PM",
    description: "School band performance.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 ml-2 rounded-lg">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((e) => (
          <div
            key={e.id}
            className="p-5 bg-gray-100 rounded-lg border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaYellow"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">{e.title}</h1>
              <span className="text-xs text-gray-300">{e.time}</span>
            </div>
            <p className="text-sm mt-2 text-gray-400">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
