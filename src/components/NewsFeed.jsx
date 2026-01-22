import NewsCard from './NewsCard';
import FloatingButton from './Button';
import { newsData } from '../data/mockData';


const NewsFeed = ({ onLogout }) => {
    return (
        <div className="feed-container">
            <header className="app-header">
                <button onClick={onLogout} className="back-btn">←</button>
            </header>

            <h1 style={{
                margin: "20px 30px",
                color: "var(--text-inverse)"
            }}>City News</h1>

            <div className="scroll-content">
                {newsData.map((item) => (
                    <NewsCard key={item.id} data={item} />
                ))}
            </div>

            <FloatingButton />
        </div >
    );
};

export default NewsFeed;