import List from "./List";
import items from "./Items";

const App = () => {
  return (
    <div>
      <List layout="numbered" items={items} key={1} />
      <List layout="alpha" items={items} key={1} />
      <List layout="bullet" items={items} key={1} />
    </div>
  );
};
export default App;
