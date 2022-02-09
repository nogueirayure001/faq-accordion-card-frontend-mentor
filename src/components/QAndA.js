import React, { useState } from "react";

function QAndA(props) {
  const [isOpened, setOpenedClosed] = useState(props.opened);

  function handleClick() {
    isOpened ? setOpenedClosed(false) : setOpenedClosed(true);
  }

  const closedTemplate = (
    <li onClick={handleClick}>
      <div>
        <h2>{props.question}</h2>
        <button type='button'></button>
      </div>
      <p>{props.answer}</p>
    </li>
  );

  const openedTemplate = (
    <li onClick={handleClick}>
      <div>
        <h2 className='heading--opened'>{props.question}</h2>
        <button className='button--opened' type='button'></button>
      </div>
      <p className='parag--opened'>{props.answer}</p>
    </li>
  );

  return isOpened ? openedTemplate : closedTemplate;
}

export default QAndA;
