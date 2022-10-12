import React from "react";
import { useLoaderData } from "react-router-dom";
import hero from "../../assets/undraw_quiz_re_aol4.svg";
import QuizTopic from "../QuizTopic/QuizTopic";
import "./Home.css";

const Home = () => {
  const quizTopics = useLoaderData();
  return (
    <div>
      <div className='header'>
        <div>
          <h1>
            <span>You Know</span>
            <br /> More Than <span className='title-color'>You Think</span>
            <br /> You Do
          </h1>
        </div>
        <div>
          <img src={hero} alt='Hero' />
        </div>
      </div>
      {/* quiz topics */}
      <div className='quiz-topics-container'>
        <h2>Quiz Topics</h2>
        <div className='quiz-topics'>
          {quizTopics.data.map((quizTopic) => (
            <QuizTopic key={quizTopic.id} quizTopic={quizTopic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
