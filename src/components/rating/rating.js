import { Star } from 'lucide-react';
import './rating.css'

export default function Rating({ rating }) {
    console.log(rating)
    return (
        rating ?
        <div className='rating-container'>
            <Star className='rating-icon'/>
            <p className="rating-value">{rating.toFixed(1)}</p>
        </div>
        : null
    );
}