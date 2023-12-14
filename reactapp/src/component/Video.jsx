import "./Video.css";

const Video = (prop) => {
  return (
    <div className="video">
      <img src="https://loremflickr.com/500/400" alt="cats" />
      <div>{prop.title}</div>
    </div>
  );
};
export default Video;
