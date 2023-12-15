import "./Video.css";

const Video = ({ title, channel, views, time, verified }) => {
  return (
    <div className="">
      <div className="video">
        <img src="https://loremflickr.com/300/200" alt="cats" />
      </div>
      <div>{title}</div>
      {
        <div>
          {channel}
          {verified && "✅"}
        </div>
      }
      <div>
        {views} views . {time}
      </div>
    </div>
  );
};
export default Video;
