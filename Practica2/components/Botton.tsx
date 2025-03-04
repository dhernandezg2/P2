import { FunctionComponent, JSX } from "preact";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant: "volver" | "enviar";
  isCorrect: boolean; // Añadido para determinar si la respuesta es correcta
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { variant, children, isCorrect } = props;

  const handleClick = () => {
    if (isCorrect) {
      window.location.href = "/routes/acierto";
    } else {
      window.location.href = "/routes/fallo";
    }
  };

  return (
    <button class={`button ${variant}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;