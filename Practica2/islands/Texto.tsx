import { FunctionComponent } from "preact";

type Props = {
    texto: string
}

export const Texto: FunctionComponent<Props> = (props) => {
    return (
        <div className="texto">
            <h1>{props.texto}</h1>
        </div>
    );
}