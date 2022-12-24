import "./button.styles.scss";

const Button = ({ children, ...props }) => {
  return (
    <button className="myBtn" {...props}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
