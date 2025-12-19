import Header from './components/Header.js';
import ReviewList from './components/ReviewList.js';
import WriteReview from './components/WriteReview.js';
import { useState } from 'react';
import './App.css';


const mockReviews = [
  {
    id: 1,
    title: '나니아 연대기: 사자, 마녀 그리고 옷장',
    content: '판타지 세계관과 선악의 대비가 뚜렷한 작품으로, 어린이와 어른 모두에게 의미 있는 메시지를 전합니다.',
    rating: 4,
    genre: ['판타지', '어드벤처'],
    image: 'https://upload.wikimedia.org/wikipedia/en/1/10/The_Chronicles_of_Narnia_-_The_Lion%2C_the_Witch_and_the_Wardrobe.jpg',
    date: new Date().getTime()
  },
  {
    id: 2,
    title: '나니아 연대기: 캐스피언 왕자',
    content: '성장과 책임이라는 주제를 중심으로 한 속편으로, 전작보다 더 성숙해진 이야기와 스케일이 인상적입니다.',
    rating: 4,
    genre: ['판타지', '어드벤처'],
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Principe_Caspain_poster.jpg',
    date: new Date().getTime()
  },
  {
    id: 3,
    title: '오만과 편견',
    content: '섬세한 감정 묘사와 아름다운 영상미가 돋보이는 작품으로, 시대를 초월한 사랑의 이야기를 우아하게 그려냅니다.',
    rating: 4,
    genre: ['로맨스', '드라마'],
    image: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg',
    date: new Date().getTime()
  },
  {
    id: 4,
    title: '인터스텔라',
    content: '과학과 감성을 동시에 만족시키는 영화로, 특히 음악과 비주얼이 오래 기억에 남습니다.',
    rating: 4,
    genre: ['SF', '드라마'],
    image: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
    date: new Date().getTime()
  },
  {
    id: 5,
    title: '라라랜드',
    content: '현실과 꿈 사이에서 갈등하는 청춘의 모습을 아름다운 색감과 음악으로 표현한 작품입니다.',
    rating: 4,
    genre: ['로맨스', '뮤지컬'],
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/La_La_Land_%28film%29.png/250px-La_La_Land_%28film%29.png',
    date: new Date().getTime()
  },
];


function App() {
  const [reviews, setReviews] = useState(mockReviews);
  // reviews: 전체 리뷰 목록 상태
  // setReviews: 리뷰 목록을 변경하는 함수
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 리뷰 작성/수정 팝업이 열려 있는지 여부
  const [editingReview, setEditingReview] = useState(null);
  // 수정 중인 리뷰 정보
  // null이면 "새 리뷰 작성" 상태
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    rating: 0,
    image: ''
  });
  // 리뷰 작성/수정 폼에 입력되는 데이터


  // 새 리뷰 작성을 위한 팝업을 여는 함수
  const openCreatePopup = () => {
    setEditingReview(null);
    setFormData({ title: '', content: '', rating: 0, image: '' });
    setIsPopupOpen(true);
  };


  // 기존 리뷰를 수정하기 위한 팝업을 여는 함수
  const openEditPopup = (review) => {
    setEditingReview(review);
    setFormData({
      title: review.title,
      content: review.content,
      rating: review.rating,
      image: review.image
    });
    setIsPopupOpen(true);
  };


  // 리뷰 작성/수정 팝업을 닫고 상태를 초기화하는 함수
  const closePopup = () => {
    setIsPopupOpen(false);
    setEditingReview(null);
    setFormData({ title: '', content: '', rating: 0, image: '' });
  };


  // 리뷰를 추가하거나 수정하여 저장하는 함수
  const handleSubmit = () => {
    if (!formData.title || !formData.content || formData.rating === 0) return;
    
    if (editingReview) {
      setReviews(reviews.map(r => 
        r.id === editingReview.id 
          ? { ...r, ...formData }
          : r
      ));
    } else {
      const newReview = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString().split('T')[0]
      };
      setReviews([newReview, ...reviews]);
    }
    
    closePopup();
  };


  // 선택한 리뷰를 목록에서 삭제하는 함수
  const handleDelete = (id) => {
    if (window.confirm('정말 이 리뷰를 삭제하시겠습니까?')) {
      setReviews(reviews.filter(r => r.id !== id));
    }
  };

  // 검색 기능
  const [search, setSearch] = useState("");
  // search: 사용자가 입력한 검색어 상태 저장
  // setSearch: search 값을 갱신하는 함수

  // 검색어 입력 시 search 상태 업데이트:
  const onChangeSearch = (e) => {
      setSearch(e.target.value);
      // 사용자가 입력한 값으로 search 갱신
  };

  // 검색어에 따라 필터링된 할 일 목록 반환:
  const getSearchResult = () => {
      if (search === "") {
      return reviews;
    }
    
    const searchLower = search.toLowerCase();
    return reviews.filter((review) =>
      review.title.toLowerCase().includes(searchLower) ||
      review.content.toLowerCase().includes(searchLower)
    );
  };


  return (
    <div className="app">
      <Header onCreateClick={openCreatePopup} />

      <div>
        <input
          value={search}
          onChange={onChangeSearch}
          className="searchbar"
          placeholder="영화 제목을 입력하세요"
        />
      </div>

      <main className="app-main">
        <ReviewList
          reviews={getSearchResult()}
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
