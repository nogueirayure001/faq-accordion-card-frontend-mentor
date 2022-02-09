import React from "react";
import QAndA from "./components/QAndA";
import { nanoid } from "nanoid";

function App(props) {
  const qAndAList = props.qAndA.map((item) => {
    return (
      <QAndA
        question={item.question}
        answer={item.answer}
        opened={item.opened}
        key={"key-" + nanoid()}
      />
    );
  });

  return (
    <div className='wrapper'>
      <div className='content-wrapper'>
        <header>
          <h1>FAQ</h1>
        </header>

        <main>
          <ul>{qAndAList}</ul>
        </main>
      </div>

      <div className='illustration-wrapper'>
        <div className='illustration'></div>
        <div className='illustration-box'></div>
      </div>
    </div>
  );
}

export default App;
