import { movieDetailsUrl, options, showDetailsUrl } from '@/config';
import { notFound } from 'next/navigation';

export default async function WatchPage({ params, searchParams }) {
    const { id } = await params;
    const resolvedSearchParams = await searchParams;
    const type = resolvedSearchParams?.type;
    let url = "";
    let data;

    if (!id) {
        notFound();
    } else {
        if (type === 'movie') {
            url = movieDetailsUrl(id);
        } else if (type === 'show') {
            url = showDetailsUrl(id);
        } else {
            notFound();
        }
        const res = await fetch(url, options);
        if (!res.ok) {
            notFound();
        }
        data = await res.json();
    }

    console.log(data);


    return (
        <main>
            <div style={{   backgroundImage: `url('https://image.tmdb.org/t/p/w500/${data.backdrop_path}')`,
                            backgroundSize: 'contain',
                            maskImage: 'linear-gradient(to right, black 20%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent)',
                            width: 600,
                            height: 335 }}>
            </div>
            <h1>{data.title || data.name}</h1>
            <h3>{data.tagline}</h3>
            <p>{data.overview}</p>
            {/* Add your watch details here */}
        </main>
    );
}
