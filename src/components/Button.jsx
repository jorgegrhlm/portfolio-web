import "./button.css";

function Button({ text, href, onClick, target, rel }) {
  if (href) {
    return (
      <a
        href={href}
        className="custom-button"
        target={target}
        rel={rel}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      className="custom-button"
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;