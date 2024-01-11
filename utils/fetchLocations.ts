import { Location } from "@/typing";
export const fetchLocations = async () => {
  const res = await fetch(`http://localhost:3000/api/getLocations`);
  console.log(res);
  const data = await res.json();
  const locations: Location[] = data.locations;

  return locations;
};
