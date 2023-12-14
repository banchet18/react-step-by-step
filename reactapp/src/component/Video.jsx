import "./Video.css";

const Video = ({ title, bgColor }) => {
  return (
    <div className="video">
      <img src="https://loremflickr.com/500/400" alt="cats" />
      <div style={{ backgroundColor: bgColor }}>{title}</div>
    </div>
  );
};
export default Video;
