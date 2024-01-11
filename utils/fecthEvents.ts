import { Event } from "@/typing";
export const fetchEvents = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getEvents`);
  console.log(res);
  const data = await res.json();
  const events: Event[] = data.events;

  return events;
};
