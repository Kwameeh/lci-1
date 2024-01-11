import { Location } from "@/typing";
export const fetchLocations = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/getLocations`,
  );
  console.log(res);
  const data = await res.json();
  const locations: Location[] = data.locations;

  return locations;
};
