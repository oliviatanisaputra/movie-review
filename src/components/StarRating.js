import { Star } from 'lucide-react';

function StarRating({ rating, interactive = false, onRate = null }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(star => {
        const filled = star <= rating;

        return (
          <Star
            key={star}
            className={`star ${
              filled ? 'star-filled' : 'star-empty'
            } ${interactive ? 'star-interactive' : ''}`}
            onClick={() => interactive && onRate && onRate(star)}
          />
        );
      })}
    </div>
  );
}

export default StarRating;