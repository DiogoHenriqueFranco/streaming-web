'use client';
import Link from "next/link";
import "./card.css";

export default function Card({id, image, title, description}) {
    return (
        <Link href={`/movie_page/${id}`}>
            <div className="card"  key={id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})` }}> 
                <div className="card-content">
                    <h2 className="card-title">{title || "No Title Available"}</h2>
                    <p className="card-description">{description || "No description available."}</p>
                </div>
            </div>
        </Link>
    );
}