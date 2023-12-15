import "./App.css";
import Video from "./component/Video";
import Border from "./component/Border";

const App = () => {
  return (
    <>
      <div className="container">
        <Video
          title="React js"
          channel="coderDost"
          views="10k"
          time="1 year ago"
        />
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
