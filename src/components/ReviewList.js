import ReviewListItem from "./ReviewListItem.js";

function ReviewList({ reviews, onEdit, onDelete, onCreateClick }) {
  if (reviews.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-text">아직 작성된 리뷰가 없습니다.</p>
        <button onClick={onCreateClick} className="empty-button">
          첫 리뷰를 작성해보세요!
        </button>
      </div>
    );
  }

  return (
    <div className="review-grid">
      {reviews.map(review => (
        <ReviewListItem
          key={review.id}
          review={review}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ReviewList;