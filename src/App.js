import React from "react";
import FormNew from "./components/FormNew";
import Main from "./components/Main"

const src = "https://eliasgabriel1.github.io/portifa-comunity/content/img/perfil.png"

function App() {
  return (
    <Main>
      <img width="100" src={src} alt="logo"/>
      <h1> Black Friday !</h1>
      <h2> Fique ligado(a) na única promoção que faço no ano! <br/> MOMENTO MAIS ESPERADO DO ANO!</h2>
<FormNew/>
    </Main>
  );
}

export default App;
