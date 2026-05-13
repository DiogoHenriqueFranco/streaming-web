import Feature from "@/components/features-block/features-block";
import { discoverMoviesUrl, discoverShowsUrl, options } from "@/config";


export default async function Home() {
  const moviesRes = await fetch(discoverMoviesUrl, options);
  const moviesData = await moviesRes.json();
  const moviesItems = await moviesData.results;

  const showsRes = await fetch(discoverShowsUrl, options);
  const showsData = await showsRes.json();
  const showsItems = await showsData.results;

  return (
    <main>
      <h1>Home Page</h1>
      <Feature sectionTitle="Popular Movies" items={moviesItems} />

      <Feature sectionTitle="Popular Shows" items={showsItems}/>
    </main>
  );
}