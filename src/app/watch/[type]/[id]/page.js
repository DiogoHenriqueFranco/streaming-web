import Hero from '@/components/watch-page/hero';
import { movieDetailsUrl, options, showDetailsUrl } from '@/config';
import { notFound } from 'next/navigation';

export default async function WatchPage({ params }) {
    const { type, id } = await params;
    let url = "";
    let data;

    console.log('Type:', type, 'ID:', id);
    if (!id) {
        console.log('No ID, notFound');
        notFound();
    } else {
        if (type === 'movie') {
            url = movieDetailsUrl(id);
        } else if (type === 'show') {
            url = showDetailsUrl(id);
        } else {
            console.log('Invalid type:', type);
            notFound();
        }
        console.log('Fetching:', url);
        const res = await fetch(url, options);
        console.log('Status:', res.status);
        if (!res.ok) {
            console.log('API failed, notFound');
            notFound();
        }
        data = await res.json();
    }

    return (
        <main>
            <Hero data={data} />
            {/* Add your watch details here */}
        </main>
    );
}
