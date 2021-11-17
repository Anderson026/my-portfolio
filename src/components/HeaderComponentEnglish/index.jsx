import { Link } from "react-router-dom";

export function HeaderComponentEnglish() {
  return (
    <header>
      <h1>Anderson Ferreira</h1>
      <p>Studying programing since 2018, in love for development. Currently i use the technologies
        HTML, CSS, JavaScript, Git, Github, Node.JS, PostgreSql in personal projects. My goal is to facilitate the
        people's lives through technology.</p>
        <Link to="/">Portuguese</Link>
    </header>
  )
}