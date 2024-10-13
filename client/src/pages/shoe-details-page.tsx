import { useParams } from "react-router-dom";
import Button from "../components/button";
import Shoe from "../types/shoe";
import { useQuery } from "@tanstack/react-query";

function ShoeDetailsPage() {
  const { id } = useParams();
  console.log(id);
  const { isPending, isError, data } = useQuery<Shoe>({
    queryKey: ["getShoe", id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/shoes/${id}`);
      const shoeData = await response.json();
      return shoeData;
    },
  });

  if (isPending) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="flex flex-col-reverse">
      <img src={data?.imgURL} alt={data?.name} />
      <div className="p-4">
        <h4 className="font-semibold text-sm text-zinc-700">{data?.brand}</h4>
        <h1 className="font-semibold">{data?.name}</h1>
        <h1 className="font-semibold text-lg">MRP: {data?.price}</h1>
        <Button className="w-full">Add to Bag</Button>
      </div>
    </div>
  );
}

export default ShoeDetailsPage;
