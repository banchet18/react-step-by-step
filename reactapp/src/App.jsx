import "./App.css";
import Video from "./component/Video";
import Border from "./component/Border";

const App = () => {
  const videos = [
    {
      title: "React js",
      channel: "coderDost",
      views: "10k",
      time: "1 year ago",
      verified: false,
    },
    {
      title: "Node js",
      channel: "coderDost",
      views: "100k",
      time: "1 year ago",
      verified: false,
    },
    {
      title: "React js",
      channel: "coderDost",
      views: "10k",
      time: "1 year ago",
      verified: false,
    },
  ];
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
            verified={true}
          />
        </Border>
      </div>
    </>
  );
};

export default App;
