import StarRating from './StarRating';
import { useState } from 'react';
import { X } from 'lucide-react';

function WriteReview({ isOpen, onClose, formData, setFormData, onSubmit, editingReview }) {
    const [imagePreview, setImagePreview] = useState(formData.image || '');

    const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
        const base64String = reader.result;
        setFormData({ ...formData, image: base64String });
        setImagePreview(base64String);
        };
        reader.readAsDataURL(file);
    }
    };

    const handleImageURLChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, image: url });
    setImagePreview(url);
    };


    const CloseIcon = () => <X className="close-icon" />;


    if (!isOpen) return null;

    return (
    <div className="modal-overlay">
        <div className="modal">
            <div className="modal-header">
                <h2 className="modal-title">
                {editingReview ? '리뷰 수정' : '리뷰 작성'}
                </h2>
                <button onClick={onClose} className="close-button">
                <CloseIcon />
                </button>
            </div>


            <div className="modal-body">
                <div className="form-group">
                    <label className="form-label">
                        영화 제목 *
                    </label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="form-input"
                        placeholder="영화 제목을 입력하세요"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">
                        평점 *
                    </label>
                    <StarRating 
                        rating={formData.rating} 
                        interactive={true} 
                        onRate={(rating) => setFormData({ ...formData, rating })}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">
                        리뷰 내용 *
                    </label>
                    <textarea
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        className="form-textarea"
                        rows="5"
                        placeholder="영화에 대한 리뷰를 작성하세요"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">
                        영화 포스터
                    </label>

                    <div className="file-group">
                        <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="file-input"
                        />

                        <div className="file-hint">또는 URL 입력:</div>

                        <input
                        type="url"
                        value={formData.image.startsWith('data:') ? '' : formData.image}
                        onChange={handleImageURLChange}
                        className="form-input"
                        placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {imagePreview && (
                        <img 
                        src={imagePreview} 
                        alt="미리보기"
                        className="image-preview"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                        />
                    )}
                </div>

                <div className="modal-actions">
                    <button
                        onClick={onSubmit}
                        className="primary-button"
                        disabled={
                        !formData.title ||
                        !formData.content ||
                        formData.rating === 0
                        }
                    >
                        {editingReview ? '수정하기' : '작성하기'}
                    </button>
                    
                    <button onClick={onClose} className="secondary-button">
                        취소
                    </button>
                </div>
            </div>
        </div>
    </div>
    );


    // return (
    //     <form
    //         onSubmit={(e) => {
    //             e.preventDefault();
    //             const formData = new FormData(e.target);
    //             const review = formData.get('review');
    //             onSubmit(review);
    //             e.target.reset();
    //         }}
    //     >
    //         <textarea name="review" placeholder="Write your review here..." required />
    //         <button type="submit">Submit Review</button>
    //     </form>
    // );
    };

    export default WriteReview;
