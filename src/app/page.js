import './page.module.css';
import Feature from "@/components/features-block/features-block";
import { options, trendingMoviesUrl, trendingShowsUrl, upcomingMoviesUrl, upcomingShowsUrl } from "@/config";


export default async function Home() {

  async function getApiResults(url) {
    const res = await fetch(url, options);
    const data = await res.json();
    const items = await data.results;
    return await items;
  }

  const [trendingMovies, trendingShows, upcomingMovies, upcomingShows] = await Promise.all([
    getApiResults(trendingMoviesUrl),
    getApiResults(trendingShowsUrl),
    getApiResults(upcomingMoviesUrl),
    getApiResults(upcomingShowsUrl)
  ]);
  
  return (
    <main id="homepage">
      <Feature sectionTitle="Trending Movies" items={trendingMovies} type="movie" />
      <Feature sectionTitle="Trending Shows" items={trendingShows} type="show"/>
      <Feature sectionTitle="Upcoming Movies" items={upcomingMovies} type="movie"/>
      <Feature sectionTitle="Upcoming Shows" items={upcomingShows} type="show"/>
    </main>
  );
}