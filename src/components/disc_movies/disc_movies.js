import { options } from "@/config";
import Track from "../track/track";

export default async function Home() {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
  const data = await res.json();
  const items = await data.results;

  return (
    <main>
      <h1>Simple Project Page</h1>
      <Track items={items} />
    </main>
  );
}