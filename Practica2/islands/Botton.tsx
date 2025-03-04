import { FunctionComponent, JSX } from "preact";

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant: "volver" | "enviar";
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const {variant, children} = props;
  return (
    <button class={`button ${variant}`}>
      {children}
    </button>
  );
}

export default Button;