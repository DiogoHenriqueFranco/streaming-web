'use client';
import { useEffect, useRef, useState } from "react";
import "./track.css";
import Card from "../card/card";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

export default function Track({ items }) {
    const trackRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        setAtEnd(track.scrollWidth <= track.clientWidth);

        function checkScroll() {
            setAtStart(track.scrollLeft === 0);
            setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth);
        }

        track.addEventListener('scroll', checkScroll);
        return () => track.removeEventListener('scroll', checkScroll);
    }, []);


    const getScrollAmount = () => {
        const track = trackRef.current;
        const cardWidth = track.firstChild?.offsetWidth || 0;
        const gap = 16;
        const padding = 8 * 2; // both sides
        const visible = Math.floor((track.clientWidth - padding) / (cardWidth + gap));
        return (cardWidth + gap) * visible;
    };

    function scrollLeft() {
        trackRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    }

    function scrollRight() {
        trackRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    }

    const buttonStyle = (disabled) => ({
        opacity: disabled ? 0.15 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        transition: 'opacity 0.3s ease',
    });

    return (
        <div className="track-wrapper">
            <CircleArrowLeft className="left btn" onClick={scrollLeft} style={buttonStyle(atStart)} />
            <div className="track" ref={trackRef}>
                {items.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        type={item.media_type || (item.title ? 'movie' : 'tv')}
                        image={item.poster_path}
                        title={item.title || item.name}
                        description={item.overview}
                    />
                ))}
            </div>
            <CircleArrowRight className="right btn" onClick={scrollRight} style={buttonStyle(atEnd)} />
        </div>
    );
}
