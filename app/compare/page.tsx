"use client";

import { useState } from "react";
import { colleges } from "../../data/colleges";

export default function ComparePage() {
  const [college1, setCollege1] = useState("");
  const [college2, setCollege2] = useState("");

  const firstCollege = colleges.find(
    (c) => c.id === Number(college1)
  );

  const secondCollege = colleges.find(
    (c) => c.id === Number(college2)
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Compare Colleges
      </h1>

      <div className="flex gap-4 mb-8">
        <select
          className="border p-2"
          value={college1}
          onChange={(e) => setCollege1(e.target.value)}
        >
          <option value="">Select College 1</option>

          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
            >
              {college.name}
            </option>
          ))}
        </select>

        <select
          className="border p-2"
          value={college2}
          onChange={(e) => setCollege2(e.target.value)}
        >
          <option value="">Select College 2</option>

          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
            >
              {college.name}
            </option>
          ))}
        </select>
      </div>

      {firstCollege && secondCollege && (
        <table className="border-collapse border w-full">
          <thead>
            <tr>
              <th className="border p-2">Feature</th>
              <th className="border p-2">
                {firstCollege.name}
              </th>
              <th className="border p-2">
                {secondCollege.name}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-2">Location</td>
              <td className="border p-2">
                {firstCollege.location}
              </td>
              <td className="border p-2">
                {secondCollege.location}
              </td>
            </tr>

            <tr>
              <td className="border p-2">Fees</td>
              <td className="border p-2">
                ₹{firstCollege.fees}
              </td>
              <td className="border p-2">
                ₹{secondCollege.fees}
              </td>
            </tr>

            <tr>
              <td className="border p-2">Rating</td>
              <td className="border p-2">
                {firstCollege.rating}
              </td>
              <td className="border p-2">
                {secondCollege.rating}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}