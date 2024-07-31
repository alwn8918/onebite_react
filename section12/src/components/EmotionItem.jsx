import { getEmotionImage } from "../util/get-emotion-image";
import "./EmotionItem.css";

const EmotionItem = ({ emotionId, emotionName, isSeleted, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSeleted ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
