'use client';
import { useEffect, useRef, useState } from "react";
import "./track.css";
import Card from "@/components/card/card";

export default function Track({ items }) {
    const trackRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    useEffect(() => {
    const track = trackRef.current;
    setShowRight(track.scrollWidth > track.clientWidth);
    }, [items]);

    const handleScroll = () => {
        const track = trackRef.current;
        setShowLeft(track.scrollLeft > 0);
        setShowRight(track.scrollLeft + track.clientWidth < track.scrollWidth);
    }

    const scrollLeft = () => {
        trackRef.current.scrollBy({ left: -1200, behavior: "smooth" });
    }

    const scrollRight = () => {
        trackRef.current.scrollBy({ left: 1200, behavior: "smooth" });
    }

    const buttonStyle = (visible) => ({
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
    });

    const trackStyle = (showLeft, showRight) => ({
        paddingLeft: showLeft ? '64px' : '0',
        paddingRight: showRight ? '64px' : '0',
        transition: 'padding 0.45s ease',
    });

  return (
    <div className="wrapper">
        <button className="left-btn" onClick={scrollLeft} style={buttonStyle(showLeft)}>←</button>
        <div className="track" ref={trackRef} onScroll={handleScroll} style={trackStyle(showLeft, showRight)}>
        {items.map((movie) => (
            <Card
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            description={movie.overview}
            />
        ))}
        </div>
        <button className="right-btn" onClick={scrollRight} style={buttonStyle(showRight)}>→</button>
    </div>
  );
}