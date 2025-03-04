import { signal } from "@preact/signals";

const respuesta = signal("");

export default function Form() {
  return (
    <div class = "textfield">
      <input type="text" id="respuesta" value={respuesta.value}
        onInput={(e) => (respuesta.value = e.currentTarget.value)}
      />
    </div>
  );
}
