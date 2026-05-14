'use client';
import { useEffect, useRef, useState } from "react";
import "./track.css";
import Card from "@/components/card/card";

export default function Track({ items }) {
    const trackRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(0);
    const maxIndex = Math.max(0, items.length - cardsPerView);

    const gap = 16;

    useEffect(() => {
        const calculateCardsPerView = () => {
            if (!trackRef.current || trackRef.current.children.length === 0) return;

            const containerWidth = trackRef.current.clientWidth;
            const cardWidth = trackRef.current.children[0].offsetWidth;
            const calculated = Math.floor(containerWidth / (cardWidth + gap));
            setCardsPerView(Math.max(0, calculated));
        };


        calculateCardsPerView();
        window.addEventListener('resize', calculateCardsPerView);
        return () => window.removeEventListener('resize', calculateCardsPerView);
    }, []);

    const scroll = (direction) => {
        let newIndex = currentIndex + direction;
        newIndex = Math.max(0, Math.min(newIndex, maxIndex));
        setCurrentIndex(newIndex);

        if (trackRef.current) {
            const cardWidth = trackRef.current.children[0]?.offsetWidth || 0;
            
            trackRef.current.scrollTo({
                left: newIndex * (cardWidth + gap),
                behavior: "smooth"
            });
        }
    };

    const buttonStyle = (disabled) => ({
        opacity: disabled ? 0.3 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        transition: 'opacity 0.3s ease',
    });

    return (
        <div className="track-wrapper">
            <button
                className="left-btn"
                onClick={() => scroll(-1)}
                style={buttonStyle(currentIndex === 0)}
            >
                ←
            </button>
            <div className="track" ref={trackRef}>
                {items.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        type={item.media_type || (item.title ? 'movie' : 'show')}
                        image={item.poster_path}
                        title={item.title || item.name}
                        description={item.overview}
                    />
                ))}
            </div>
            <button
                className="right-btn"
                onClick={() => scroll(1)}
                style={buttonStyle(currentIndex === maxIndex)}
            >
                →
            </button>
        </div>
    );
}
