const NewsCard = ({ data }) => {
    const isFeatured = data.id === 1;
    return (
        <div className={`card ${isFeatured ? "featured" : "horizontal"}`}>
            <div className="card-header">
                <img src={data.avatar} alt="avatar" className="avatar" />
                <div className="user-info">
                    <h4>{data.user}</h4>
                    <span>{data.time}</span>
                </div>
            </div>

            <p className="card-content">{data.content}</p>


            {data.image && (
                <div className="card-image">
                    <img src={data.image} alt="post" />
                </div>
            )}

            {data.id == 1 &&
                <div className="card-footer">
                    <span>❤️ {data.likes}</span>
                    <span>💬 {data.comments}</span>
                    <span>share</span>
                </div>

            }


        </div>
    );
};

export default NewsCard;