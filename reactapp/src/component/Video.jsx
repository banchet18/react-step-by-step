import "./Video.css";

const Video = ({ title }) => {
  return (
    <div className="video">
      <img src="https://loremflickr.com/500/400" alt="cats" />
      <div>{title}</div>
    </div>
  );
};
export default Video;
