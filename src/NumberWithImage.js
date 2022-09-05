import wingImg from "./static/wing.png";

const NumberWithImage = ({ list }) => {
  const splitLt = list.split("w");
  return (
    <div className="wing-image-wrap">
      <p>{splitLt[0]}</p>
      <img src={wingImg} alt="img" />
      <p>{splitLt[1]}</p>
    </div>
  );
};

export default NumberWithImage;
