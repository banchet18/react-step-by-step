import "./App.css";
import Video from "./component/Video";
import Border from "./component/Border";

const App = () => {
  const videos = [
    {
      id: 1,
      title: "React js",
      channel: "coderDost",
      views: "10k",
      time: "1 year ago",
      verified: true,
    },
    {
      id: 2,
      title: "Node js",
      channel: "coderDost",
      views: "100k",
      time: "1 Month ago",
      verified: false,
    },
    {
      id: 3,
      title: "Mongo DB",
      channel: "coderDost",
      views: "1M",
      time: "1 day ago",
      verified: true,
    },
  ];
  return (
    <>
      <div className="container">
        <Video
          title="Node js"
          channel="coderDost"
          views="100k"
          time="1 month ago"
          verified={true}
        />
      </div>
    </>
  );
};

export default App;
