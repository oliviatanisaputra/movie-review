import Header from './components/Header.js';
import WriteReview from './components/WriteReview.js';
import './App.css';

const mockReviews = [
  {
    id: 1,
    title: '나니아 연대기: 사자, 마녀 그리고 옷장',
    content: '판타지 세계관과 선악의 대비가 뚜렷한 작품으로, 어린이와 어른 모두에게 의미 있는 메시지를 전합니다.',
    rating: 4,
    genre: ['판타지', '어드벤처'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop',
    date: new Date().getTime()
  },
  {
    id: 2,
    title: '나니아 연대기: 캐스피언 왕자',
    content: '성장과 책임이라는 주제를 중심으로 한 속편으로, 전작보다 더 성숙해진 이야기와 스케일이 인상적입니다.',
    rating: 4,
    genre: ['판타지', '어드벤처'],
    image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=400&h=300&fit=crop',
    date: new Date().getTime()
  },
  {
    id: 8,
    title: '오만과 편견',
    content: '섬세한 감정 묘사와 아름다운 영상미가 돋보이는 작품으로, 시대를 초월한 사랑의 이야기를 우아하게 그려냅니다.',
    rating: 4,
    genre: ['로맨스', '드라마'],
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&h=300&fit=crop',
    date: new Date().getTime()
  };
];

function App() {
    
  const openCreatePopup = () => {
    setEditingReview(null);
    setFormData({ title: '', content: '', rating: 0, image: '' });
    setIsPopupOpen(true);
  };

  return (
    <div className="App">
      <Header onCreateClick={openCreatePopup} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <ReviewLists
          reviews={reviews}
          onEdit={openEditPopup}
          onDelete={handleDelete}
          onCreateClick={openCreatePopup}
        />
      </main>

      <WriteReview
        isOpen={isPopupOpen}
        onClose={closePopup}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        editingReview={editingReview}
      />
    </div>
  );
}

export default App;
