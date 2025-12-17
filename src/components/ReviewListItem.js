import StarRating from './StarRating';
import { Edit2, Trash2 } from 'lucide-react';

function ReviewListItem({ review, onEdit, onDelete }) {
  return (
    <div className="review-card">
      {review.image && (
        <img 
          src={review.image} 
          alt={review.title}
          className="review-image"
        />
      )}

      <div className="review-content">
        <div className="review-header">
          <h2 className="review-title">{review.title}</h2>
          <div className="review-actions">
            <button onClick={() => onEdit(review)} className="edit-button">
              <Edit2 className="icon" />
            </button>
            <button onClick={() => onDelete(review.id)} className="delete-button">
              <Trash2 className="icon" />
            </button>
          </div>
        </div>
        
        <div className="review-rating">
          <StarRating rating={review.rating} />
        </div>
        
        <p className="review-text">{review.content}</p>
        
        <p className="review-date">{review.date}</p>
      </div>
    </div>
  );
}

export default ReviewListItem;