import List from "./List";
import items from "./Items";

const App = () => {
  return (
    <div>
      <List layout="square" items={items} key={1} color="red" />
      <List layout="circle" items={items} key={2} color="blue" />
      <List layout="upper-roman" items={items} key={3} color="green" />
    </div>
  );
};
export default App;
