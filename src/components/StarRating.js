import { Star } from 'lucide-react';


// 별점을 시각적으로 표시하고, 필요 시 클릭으로 선택할 수 있게 하는 컴포넌트
function StarRating({ rating, interactive = false, onRate = null }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(star => {
        // 현재 별이 채워져야 하는지 판단
        const filled = star <= rating;

        return (
          <Star
            key={star}
            // 별의 채움 상태와 클릭 가능 여부에 따른 스타일 적용
            className={`star ${
              filled ? 'star-filled' : 'star-empty'
            } ${interactive ? 'star-interactive' : ''}`}

            // 클릭 가능한 경우 선택한 별점 값을 전달
            onClick={() => interactive && onRate && onRate(star)}
          />
        );
      })}
    </div>
  );
}

export default StarRating;