import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkQuizTopic } from "../../utilities/CheckQuizTopic";
import Quiz from "../Quiz/Quiz";
import "./Quizes.css";

const Quizes = () => {
  const [quizTopic, setQuizTopic] = useState("");
  const data = useLoaderData();
  const { quizId } = useParams();

  useEffect(() => {
    const newQuizTopic = checkQuizTopic(quizId);
    setQuizTopic(newQuizTopic);
  }, []);

  const questions = data.data.questions;

  const notify = (data) => toast(data);

  const optionClick = (option, id) => {
    const seletedQuestion = questions.find((q) => q.id === id);
    if (option === seletedQuestion.correctAnswer) {
      notify("Your answer is correct");
    } else {
      notify("Your answer is wrong");
    }
  };

  const iconClickHandlr = (id) => {
    const seletedQuestion = questions.find((q) => q.id === id);
    notify(seletedQuestion.correctAnswer);
  };

  return (
    <div className='quizes'>
      <ToastContainer />
      <h2>Questions About {quizTopic ? quizTopic : " "} : </h2>
      <div>
        {questions.map((qes) => (
          <Quiz
            key={qes.id}
            qes={qes}
            optionClick={optionClick}
            iconClickHandlr={iconClickHandlr}
          />
        ))}
      </div>
    </div>
  );
};

export default Quizes;
