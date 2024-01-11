import { News } from "@/typing";
export const fetchNews = async () => {
  const res = await fetch(`http://localhost:3000/api/getNews`);
  console.log(res);
  const data = await res.json();
  const news: News[] = data.news;

  return news;
};
