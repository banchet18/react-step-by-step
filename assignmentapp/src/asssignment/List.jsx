const List = ({ items, layout, color }) => {
  return (
    <div>
      <ul
        style={
          ({ listStyleType: `${layout}` }, { backgroundColor: `${color}` })
        }
      >
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
