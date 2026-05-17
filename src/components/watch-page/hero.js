import './styles/hero.css';
import noPoster from '@/app/assets/images/no_poster.png'

export default function Hero({ data, type }) {

    const releaseYear = (data.release_date || data.first_air_date || "").split("-")[0];

    const genres = data.genres

    return (
        
        <div className='hero-wrapper'>
            <div className='bg-container'>
                <div className="backdrop" style={{ backgroundImage:  `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
                                                    backgroundColor: !data.backdrop_path ? '#ffffff25' : 'transparent'}}></div>
            </div>
            <div className='hero-info'>
            </div>
            <div className='item-container'>
                <div className='poster' style={{ backgroundImage: data.poster_path ? `url(https://image.tmdb.org/t/p/w500/${data.poster_path})` : `url(${noPoster.src})`  }}></div>
                <div className='item-info'>
                    <div className='title-info'>
                        <h1 className='title'>{data.title || data.name}</h1>
                        <p className='release-date'>{releaseYear}</p>  
                    </div>
                    <div className="genre-info">{genres?.map(genre => (
                        <div key={genre.id} className="genre-card">
                            <div className="genre-name">
                                <p>{genre.name}</p>
                            </div>
                        </div>
                    ))}</div>                  
                    <div className='description-info'>
                        {data.tagline && <h3 className='tagline'>{data.tagline}</h3>}
                        {data.overview && <p className='overview'>{data.overview}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}