import { News } from "@/typing";
export const fetchNews = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getNews`);
  console.log(res);
  const data = await res.json();
  const news: News[] = data.news;

  return news;
};
