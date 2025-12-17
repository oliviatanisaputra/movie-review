
const Header = ({ onCreateClick }) => {
  return (
    <header>
        <div className="title">
            <h1>나의 영화 리뷰</h1>
        </div>
        <div>
            <button className="writebutton" onClick={onCreateClick}>리뷰 작성</button>
        </div>
    </header>
  );
};

export default Header;