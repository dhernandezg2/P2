
import { Texto } from "../islands/Texto.tsx";
import Button from "../islands/Botton.tsx";
import Form from "../islands/Form.tsx";

type Question = {
  question: string;
  answer: string
}

type QuestionResponse = {
  result: Question;
}

export default async function Home() {
  const API_KEY = Deno.env.get("API_KEY")
  if(!API_KEY){
      throw new Error("Not api key found")
  }
  const url = "https://api.api-ninjas.com/v1/trivia"
  const data = await fetch(url,{
      headers: {
              'X-Api-Key': API_KEY
      }
  })
  if(data.status !== 200) throw new Error("Fallo en la API")
  const response = await data.json()

  return (
    <div>
      <Texto texto="Trivia" />
      <br></br>
      <Texto texto={response[0].question} />
      <Form />
        
        <Button variant="enviar">
        Enviar
      </Button>
    </div>
  );
}
  