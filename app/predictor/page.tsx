"use client";

import { useState } from "react";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [result, setResult] = useState("");

  const predictCollege = () => {
    const userRank = Number(rank);

    if (userRank <= 1000) {
      setResult("VIT AP");
    } else if (userRank <= 5000) {
      setResult("SRKR Engineering College");
    } else {
      setResult("JNTU Kakinada");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">
        College Predictor
      </h1>

      <input
        type="number"
        placeholder="Enter Rank"
        className="border p-2 mr-4"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
      />

      <button
        onClick={predictCollege}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Predict
      </button>

      {result && (
        <p className="mt-4 text-xl">
          Recommended College: {result}
        </p>
      )}
    </div>
  );
}