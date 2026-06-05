"use client";

import { useState } from "react";
import { colleges } from "../data/colleges";
import CollegeCard from "../components/CollegeCard";
import Navbar from "../components/Navbar";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">
          College Discovery Platform
        </h1>

        <input
          type="text"
          placeholder="Search College..."
          className="border p-2 rounded w-full mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredColleges.map((college) => (
          <CollegeCard
            key={college.id}
            id={college.id}
            name={college.name}
            location={college.location}
            fees={college.fees}
            rating={college.rating}
          />
        ))}
      </div>
    </>
  );
}