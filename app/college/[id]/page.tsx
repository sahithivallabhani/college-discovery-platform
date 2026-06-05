import { colleges } from "../../../data/colleges";

export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = colleges.find(
    (college) => college.id === Number(id)
  );

  if (!college) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">
          College Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">
        {college.name}
      </h1>

      <p className="mb-2">
        <strong>Location:</strong> {college.location}
      </p>

      <p className="mb-2">
        <strong>Fees:</strong> ₹{college.fees}
      </p>

      <p className="mb-2">
        <strong>Rating:</strong> {college.rating}
      </p>

      <p className="mt-4">
        <strong>Overview:</strong>{" "}
        {college.overview ||
          "No overview available."}
      </p>
    </div>
  );
}