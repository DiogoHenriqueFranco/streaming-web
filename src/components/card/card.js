'use client';
import Link from "next/link";
import noPoster from '@/app/assets/images/no_poster.png'
import "./card.css";

export default function Card({id, type, image, title, description}) {
    const href = `/watch/${type}/${id}`;
    return (
        <Link href={href}>
            <div className="card"  key={id} style={{ backgroundImage: image ? `url(https://image.tmdb.org/t/p/w500/${image})` : `url(${noPoster.src})` }}> 
                <div className="card-content">
                    <h2 className="card-title">{title || "No Title Available"}</h2>
                    <p className="card-description">{description || "No description available."}</p>
                </div>
            </div>
        </Link>
    );
}