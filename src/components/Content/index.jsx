import git from "../../styles/assets/git.svg";
import github from "../../styles/assets/github.svg";
import html from "../../styles/assets/html.svg";
import css from "../../styles/assets/css.svg";
import js from "../../styles/assets/js.svg";
import nodejs from "../../styles/assets/nodejs.svg";
import ts from "../../styles/assets/ts.svg";
import pg from "../../styles/assets/pg.svg";
import mongo from "../../styles/assets/mongo.svg";
import firebase from "../../styles/assets/firebase.svg";

export function Content() {
  return (
    <section>
      <h2>Conhecimentos em:</h2>
      <div className="imagesContainer">
        <div><img src={git} alt="git icon" /></div>
        <div><img src={github} alt="github icon" /></div>
        <div><img src={html} alt="html icon" /></div>
        <div><img src={css} alt="css icon" /></div>
        <div><img src={js} alt="js icon" /></div>
        <div><img src={ts} alt="ts icon" /></div>
        <div><img src={nodejs} alt="node icon" /></div>
        <div><img src={pg} alt="postgres icon" /></div>
        <div><img src={mongo} alt="mongodb icon" /></div>
        <div><img src={firebase} alt="mongodb icon" /></div>
      </div>
    </section>
  );
}