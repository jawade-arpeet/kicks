import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Shoe from "../types/shoe";

function HomePage() {
  const { isPending, isError, error, data } = useQuery<Shoe[]>({
    queryKey: ["getShoes"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/shoes");
      const data = await response.json();
      return data;
    },
  });

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {data.map((shoe) => (
        <Link key={shoe._id} to={`/shoe/${shoe._id}`}>
          <img src={shoe.imgURL} alt={shoe.name} />
          <div className="p-4">
            <h4 className="font-semibold text-sm text-zinc-700">
              {shoe.brand}
            </h4>
            <h1 className="font-semibold">{shoe.name}</h1>
            <h1 className="font-semibold text-lg">MRP: {shoe.price}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
