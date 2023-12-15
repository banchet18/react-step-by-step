import "./App.css";
import Video from "./component/Video";
import videos from "./data/data";

const App = () => {
  return (
    <>
      <div className="container">
        {videos.map((x) => {
          return (
            <Video
              key={x.id}
              id={x.id}
              title={x.title}
              channel={x.channel}
              views={x.views}
              time={x.time}
              verified={x.verified}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
