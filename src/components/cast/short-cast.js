'use client'
import "./short-cast.css";

export default function ShortCast({data}) {

    console.log(data)
    return (
        <div className="cast-container">
            <h1>Cast</h1>
            <div className="cast-wrapper">{data?.map(person => (
                <div key={person.id} className="cast-card">
                    <div className='cast-profile' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${person.profile_path})` }}></div>
                    <div className="cast-info">
                        <p>{person.name}</p>
                        <p>{person.character}</p>
                    </div>
                </div>
            ))}</div>
        </div>
    )
}