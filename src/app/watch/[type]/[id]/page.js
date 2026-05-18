import FeatureBlock from '@/components/features-block/features-block';
import Body from '@/components/watch-page/body';
import Hero from '@/components/watch-page/hero';
import { options, detailsUrl, similarsUrl, recomendationsUrl } from '@/config';
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

    async function getApiResults(url) {
        const res = await fetch(url, options);
        const data = await res.json();
        const items = await data.results;

        console.log(items)
        return await items;
    }

    const [similars, recomendations] = await Promise.all([
        getApiResults(similarsUrl(type, id)),
        getApiResults(recomendationsUrl(type, id)),
    ]);


    return (
        <main>
            <Hero data={data} type={type} />
            <Body data={data} type={type}/>
            {similars?.length > 0 && (type === "tv" ? <FeatureBlock sectionTitle={"Similar Shows"} items={similars} type="show" /> : <FeatureBlock sectionTitle={"Similar Movies"} items={similars} type={type} />)}
            {recomendations?.length > 0 && (type === "tv" ? <FeatureBlock sectionTitle={"Recomended Shows"} items={recomendations} type="show" /> : <FeatureBlock sectionTitle={"Recomended Movies"} items={recomendations} type={type} />)}
        </main>
    );
}
