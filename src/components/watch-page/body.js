import { options, imagesUrl, creditsUrl } from '@/config';
import './styles/body.css';
import ShortCast from '../cast/short-cast';

export default async function Body({ data, type }) {

    async function getApiResults(url) {
        const res = await fetch(url, options);
        const apiData = await res.json();
        console.log(apiData.cast)
        return apiData.cast;
    }

    async function getLogos() {
        const res = await fetch(imagesUrl(type, data.id), options);
        const imageData = await res.json();
        const logosData = await imageData.logos;

        const logo = logosData.find(item => item.iso_639_1 === "en") || data[0] || {};
        return logo;
    }

    const [logo, credits] = await Promise.all([
        getLogos(),
        getApiResults(creditsUrl(type, data.id))
    ])

    const totalSeasons = data.number_of_seasons ? data.number_of_seasons : "";

    return (
        <div>
            <div className='item-info-wrapper'>
                {logo?.file_path && <div className='logo' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${logo.file_path})` }}></div>}
                <ul className='item-info-card'>
                    <li><h4>Status</h4><p>{data.status}</p></li>
                    <li><h4>{data.first_air_data ? "First aired" : "Release date" }</h4><p>{data.first_air_date || data.release_date}</p></li>
                    <li><h4>Original language</h4><p>{data.original_language.toUpperCase()}</p></li>
                    {data.networks && <li><h4>Networks</h4><p>{data.networks[0].name}</p></li>}
                    
                </ul>
            </div>
            {totalSeasons && <h3>{totalSeasons === 1 ? totalSeasons + " Season" : totalSeasons + " Seasons"}</h3>}
            <ShortCast data={credits} />
        </div>
    );
}