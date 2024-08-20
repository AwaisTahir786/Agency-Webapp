"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/animated-tooltip"
import img1 from "@/pic/a.jpg"
import img2 from "@/pic/b.jpg"
import img3 from "@/pic/c.jpg"
import img4 from "@/pic/d.jpg"
import img5 from "@/pic/e.jpg"

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: img1
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: img2
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: img3
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: img4
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: img5
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: img4
  },
];

export function Review() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
