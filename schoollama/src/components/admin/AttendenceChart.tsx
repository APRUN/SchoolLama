"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 90,
    absent: 60,
  },
  {
    name: "Tue",
    present: 60,
    absent: 20,
  },
  {
    name: "Wed",
    present: 30,
    absent: 90,
  },
  {
    name: "Thu",
    present: 40,
    absent: 30,
  },
  {
    name: "Fri",
    present: 90,
    absent: 70,
  },
];

const AttendenceChart = () => {
  return (
    <div className="h-full rounded-lg bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Attendence Report</h1>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}}/>
          <YAxis  axisLine={false} tickLine={false} tick={{fill:"#d1d5db"}}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar
            dataKey="present"
            fill="#FAE27C"
            // activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
            radius={[8,8,0,0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            // activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
            radius={[8,8,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;
