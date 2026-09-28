import vector from "../assets/Vector.png";

const Button = ({Tagname = "button", children, ...props}) => {
  return (
    <Tagname {...props} className="linear-button">
      {children}
      <span>
        <img src={vector}/>
      </span>
    </Tagname>
  );
}

export default Button