import ReviewListItem from "./ReviewListItem.js";

function ReviewList({ reviews, onEdit, onDelete, onCreateClick }) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">아직 작성된 리뷰가 없습니다.</p>
        <button
          onClick={onCreateClick}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          첫 리뷰를 작성해보세요!
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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