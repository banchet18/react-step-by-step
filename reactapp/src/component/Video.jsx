import "./Video.css";

const Video = ({ title, channel, views, time }) => {
  let verified = true;
  let channelJSX;
  if (verified) {
    channelJSX = <div>{channel}✅</div>;
  } else {
    channelJSX = <div>{channel}</div>;
  }

  return (
    <div className="">
      <div className="video">
        <img src="https://loremflickr.com/300/200" alt="cats" />
      </div>
      <div>{title}</div>
      {channelJSX}
      <div>
        {views} views . {time}
      </div>
    </div>
  );
};
export default Video;
