import './styles/hero.css';

export default function Hero({ data }) {

    console.log(data)

    const releaseYear = (data.release_date || data.first_air_date || "").split("-")[0];

    return (
        
        <div className='hero-wrapper'>
            <div className="backdrop" style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.backdrop_path}')`}}></div>
            <div className='info'>
                <div className='poster' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})` }}></div>
                <div className='title-info'>
                    <h1 className='title'>{data.title || data.name}</h1>
                    <p className='release-date'>{releaseYear}</p>
                </div>
                {data.tagline && <h3 className='tagline'>{data.tagline}</h3>}
                {data.overview && <p className='overview'>{data.overview}</p>}
            </div>
        </div>
    )
}