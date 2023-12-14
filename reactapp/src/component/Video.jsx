import "./Video.css";

const Video = ({ title, channel, views, time }) => {
  return (
    <div className="">
      <div className="video">
        <img src="https://loremflickr.com/300/200" alt="cats" />
      </div>
      <div>{title}</div>
      <div>{channel}</div>
      <div>
        {views} views . {time}
      </div>
    </div>
  );
};
export default Video;
