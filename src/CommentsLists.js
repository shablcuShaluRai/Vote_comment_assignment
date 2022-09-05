import ImagewithTitle from "./ImageWithTitle";
import Buttons from "./Buttons";

export default function CommentsLists({ commentList, handleUpdateLike }) {
  return (
    <>
      {commentList.map((comments, index) => {
        const {
          title,
          mbti,
          enneagram,
          zodiac,
          description,
          like,
          updated
        } = comments;
        return (
          <div key={index.toString()} className="commentlist-wrapper">
            <div className="title-img-wrap">
              <ImagewithTitle />
            </div>
            <div className="title">{title}</div>
            <div className="voting-wrap">
              {mbti && <Buttons name="mbti" value={mbti} />}
              {enneagram && <Buttons name="enneagram" value={enneagram} />}
              {zodiac && <Buttons name="zodiac" value={zodiac} />}
            </div>

            <div className="description">{description}</div>
            <div
              className="heart-container"
              onClick={() => handleUpdateLike(index)}
            >
              <i
                className={`${updated ? "fa fa-heart updated" : "fa fa-heart"}`}
              />
              <span className="like">{like}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
