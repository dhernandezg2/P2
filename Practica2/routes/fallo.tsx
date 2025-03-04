import Botton from "../components/Botton.tsx";
import { Texto } from "../components/Texto.tsx";

export default function Home() {
    return (
        <div class="texto">
          <Texto texto="Has fallado la pregunta" />
          <Botton variant="volver"> Volver a jugar </Botton>
        </div>
    );
}