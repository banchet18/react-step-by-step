import "./App.css";
import Video from "./component/Video";

const App = () => {
  return (
    <>
      <div>hello jee</div>
      <Video
        title="React js"
        channel="coderDost"
        views="10k"
        time="1 year ago"
      />
      <Video
        title="Node js"
        channel="coderDost"
        views="100k"
        time="1 month ago"
      />
    </>
  );
};

export default App;
