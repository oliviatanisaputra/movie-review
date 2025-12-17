import { useState } from 'react';

function WriteReview({ onSubmit }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const review = formData.get('review');
                onSubmit(review);
                e.target.reset();
            }}
        >
            <textarea name="review" placeholder="Write your review here..." required />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default WriteReview;