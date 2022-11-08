import "../App.css";
import Star from "./Star";

const Comment = ({ image, name, content, star }) => {
    return (
        <div className="CommentContainer">
            <div className="containerOfStarAndComment">
                <div className="starsContainer">
                    <div className="starContainer">
                    {
                        star.map(e => {
                            return (
                                <Star />
                            )
                        })
                    }
                    </div>
                </div>
                <p >
                    {content}
                </p>
            </div>
            <div className="userProfileContainer">
                <img className="userImage" src={image} alt={image} />
                <h3>
                    {name}
                </h3>
            </div>
        </div>
    )
}

export default Comment