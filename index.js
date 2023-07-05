const Box = (props) => {
  //  Write your code here.
  const { boxText, className } = props;
  return <p className={className}> {boxText}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading"> Boxes</h1>
    <div className="box-size-container">
      <Box boxText="Small" className="small-box" />
      <Box boxText="Medium" className="medium-box" />
      <Box boxText="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
