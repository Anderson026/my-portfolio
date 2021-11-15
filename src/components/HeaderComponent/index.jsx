import { Link } from "react-router-dom";

export function HeaderComponent() {
  return (
    <header>
      <h1>Anderson Ferreira</h1>
      <p>Estudo programação desde 2018, apaixonado por desenvolvimento. Atualmente utilizo as tecnologias
        HTML, CSS, JavaScript, Git, Github, Node.JS, PostgreSql em projetos pessoais. Meu objetivo é facilitar a
        vida das pessoas através da tecnologia.</p>
      <Link to="/englishpage">Inglês</Link>
    </header>
  )
}