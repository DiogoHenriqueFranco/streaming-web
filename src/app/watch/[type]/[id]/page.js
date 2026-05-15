import Body from '@/components/watch-page/body';
import Hero from '@/components/watch-page/hero';
import { options, detailsUrl } from '@/config';
import { notFound } from 'next/navigation';

export default async function WatchPage({ params }) {
    const { type, id } = await params;

    let data;

    if (!id) {
        console.log('No ID, notFound');
        notFound();
    } else {
        if (!type) {
            console.log('Invalid type:', type);
            notFound();
        }
        const res = await fetch(detailsUrl(type, id), options);
        console.log('Status:', res.status);
        if (!res.ok) {
            console.log('API failed, notFound');
            notFound();
        }
        data = await res.json();
    }

    console.log

    return (
        <main>
            <Hero data={data} type={type} />
            <Body data={data} type={type}/>
        </main>
    );
}
