import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Quiz.css";

const Quiz = ({ qes, optionClick, iconClickHandlr }) => {
  const { question, options, id } = qes;

  return (
    <div className='quiz'>
      <h4 className='question'>{question}</h4>
      <FontAwesomeIcon
        onClick={() => iconClickHandlr(id)}
        className='iconStyle'
        icon={faEye}
      />
      <div className='options'>
        {options.map((opt, i) => (
          <p key={i} onClick={() => optionClick(opt, id)} className='option'>
            {opt}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
