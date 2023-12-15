import "./Video.css";
const Video = ({ title, channel, views, time, verified, id }) => {
  return (
    <div className="">
      <div className="video">
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="cats" />
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
