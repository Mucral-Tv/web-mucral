import "./button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className: string;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button className={`${className} button btn-3`} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
