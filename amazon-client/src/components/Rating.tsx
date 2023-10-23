import React from "react";
import { Star } from '@mui/icons-material';
type Props = {
    rating: number
}
const RatingStars = ({ rating }: Props) => {
    const roundedRating = Math.round(rating);

    const stars = Array(5).fill(0).map((_, index) => {
        const isFilled = index < roundedRating;

        return (
            <Star className="flex-row"
                key={index}
                sx={{ color: isFilled ? "gold" : "lightgray" }}
                fontSize="medium"
            />
        );
    });

    return (
        <div>
            {stars}
        </div>
    );
};

export default RatingStars;
