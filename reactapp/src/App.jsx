import "./App.css";
import Video from "./component/Video";
import Border from "./component/Border";

const App = () => {
  const obj = {
    title: "React js",
    channel: "coderDost",
    views: "10k",
    time: "1 year ago",
  };
  return (
    <>
      <div className="container">
        <Video {...obj} />
        <Border>
          <Video
            title="Node js"
            channel="coderDost"
            views="100k"
            time="1 month ago"
          />
        </Border>
      </div>
    </>
  );
};

export default App;
