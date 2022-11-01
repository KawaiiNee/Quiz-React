import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Spinner from "../components/Spinner";
import Question from "../components/Question";
import Result from "./Result";
import Choice from "../components/Choice";
import { useGetQuestions } from "../fetchData";
const API_URL = "https://the-trivia-api.com/api/questions";

const Questions = () => {
  const { rounds, query, interval } = useGlobalContext();
  const { loading, questions, initScore } = useGetQuestions(API_URL, query);
  const [score, setScore] = useState(initScore);
  const [page, setPage] = useState(0);
  const [choices, setChoices] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [answer, setAnswer] = useState("");

  // generates choices | place correctAns to random pos
  useEffect(() => {
    if (questions[page]) {
      const { correctAnswer, incorrectAnswers } = questions[page];
      const rand = Math.floor(Math.random() * (incorrectAnswers.length + 1));
      let newChoices = [...incorrectAnswers];
      newChoices.splice(rand, 0, correctAnswer);
      setRevealAnswer(false);
      setChoices(newChoices);
      setIsDisabled(false);
    }
  }, [questions, page]);

  const evalAnswer = React.useCallback(() => {
    if (questions[page]) {
      const { correctAnswer } = questions[page];
      if (answer === correctAnswer) {
        console.log("correct");
        setScore((score) => score + 1);
      } else {
        console.log("incorrect");
      }
    }
  }, [answer, page, questions, setScore]);

  const handleAnswer = (answer, e) => {
    e.target.style.backgroundColor = "orange";
    e.target.style.color = "#fff";
    setIsDisabled(true);

    setAnswer(answer);
  };

  // TODO: an option weather timed or not
  // setup delays | before revealAnswer | preview correctAnswer | setPage
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRevealAnswer(true);
      evalAnswer();
      setIsDisabled(true);
      setTimeout(() => {
        setPage(page + 1);
      }, 2000);
    }, interval * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [page, evalAnswer, interval]);

  if (loading) {
    return <Spinner />;
  }

  if (!questions[page]) {
    return <Result score={score} rounds={rounds} />;
  }

  return (
    <article className="container text-center px-5">
      <div className="row d-flex justify-content-center align-items-center">
        <Question question={questions[page].question} />
        <div className={`row gx-5 ${isDisabled ? "disabled" : "enable"}`}>
          {choices.map((choice, index) => {
            return (
              <Choice
                key={index}
                choice={choice}
                handleAnswer={handleAnswer}
                isCorrect={
                  choice === questions[page].correctAnswer && revealAnswer
                }
              />
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Questions;
