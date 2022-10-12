import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./QuizTopic.css";

const QuizTopic = ({ quizTopic }) => {
  const { logo, name, total, id } = quizTopic;
  return (
    <div className='quiz-topic'>
      <img src={logo} alt='' />
      <div className='quiz-topic-container'>
        <p>Quiz On {name}</p>
        <p>Total Question: {total}</p>
        <button className='button'>
          <Link to={`/quiz/${id}`}>
            Start Test <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default QuizTopic;
