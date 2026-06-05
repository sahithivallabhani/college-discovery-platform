"use client";

import { useEffect, useState } from "react";
import { colleges } from "../../data/colleges";
import CollegeCard from "../../components/CollegeCard";

export default function SavedPage() {
  const [savedIds, setSavedIds] = useState<number[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedColleges") || "[]"
    );
    setSavedIds(saved);
  }, []);

  const savedColleges = colleges.filter((college) =>
    savedIds.includes(college.id)
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Saved Colleges
      </h1>

      {savedColleges.length === 0 ? (
        <p>No colleges saved yet.</p>
      ) : (
        savedColleges.map((college) => (
          <CollegeCard
            key={college.id}
            id={college.id}
            name={college.name}
            location={college.location}
            fees={college.fees}
            rating={college.rating}
          />
        ))
      )}
    </div>
  );
}