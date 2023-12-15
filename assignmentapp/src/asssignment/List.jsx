const List = ({ items, key }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
