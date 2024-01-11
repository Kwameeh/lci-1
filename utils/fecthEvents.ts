import { Event } from "@/typing";
export const fetchEvents = async () => {
  const res = await fetch(`http://localhost:3000/api/getEvents`);
  console.log(res);
  const data = await res.json();
  const events: Event[] = data.events;

  return events;
};
