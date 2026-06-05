import Link from "next/link";

type CollegeProps = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

export default function CollegeCard({
  id,
  name,
  location,
  fees,
  rating,
}: CollegeProps) {
  return (
    <div className="border p-4 rounded mb-4 bg-white text-black hover:shadow-lg transition">
      <Link href={`/college/${id}`}>
        <div>
          <h2 className="text-xl font-semibold text-black">{name}</h2>
          <p>Location: {location}</p>
          <p>Fees: ₹{fees}</p>
          <p>Rating: {rating}</p>
        </div>
      </Link>

      <button
  onClick={() => {
    const saved = JSON.parse(
      localStorage.getItem("savedColleges") || "[]"
    );

    if (!saved.includes(id)) {
      saved.push(id);
      localStorage.setItem(
        "savedColleges",
        JSON.stringify(saved)
      );
      alert("College Saved!");
    }
  }}
  className="bg-green-600 text-white px-3 py-1 rounded mt-2"
>
  Save
</button>
    </div>
  );
}