import { useState, useEffect } from "react";

export default function FavoriteButton({ productId }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(`favorite-${productId}`);
        if (saved === "true") {
        setIsFavorite(true);
        }
    }, [productId]);

    useEffect(() => {
        localStorage.setItem(`favorite-${productId}`, isFavorite);
    }, [isFavorite, productId]);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <button
        onClick={toggleFavorite}
        className={isFavorite ? "bg-gray-200 text-black px-4 py-2 rounded" : "bg-red-200 px-4 py-2 rounded" }
        >
        {isFavorite ? "Remove from Favorites 🤍" : "Add to Favorites ❤️"}
        </button>
    );
}