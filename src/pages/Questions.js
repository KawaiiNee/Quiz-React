import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Spinner from "../components/Spinner";
import Question from "../components/Question";
import Result from "./Result";
import Choice from "../components/Choice";
import { useGetQuestions } from "../fetchData";
import Timer from "../components/Timer";
const API_URL = "https://the-trivia-api.com/api/questions";

const Questions = () => {
  const { rounds, query, interval, isTimed } = useGlobalContext();
  const { loading, questions, initScore } = useGetQuestions(API_URL, query);
  const [score, setScore] = useState(initScore);
  const [page, setPage] = useState(0);
  const [choices, setChoices] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState(false);
  const [timer, setTimer] = useState(interval);
  // ms
  const answerCD = 2000;

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
  }, [questions, page, interval]);

  const evalAnswer = React.useCallback(() => {
    if (questions[page]) {
      const { correctAnswer } = questions[page];
      if (answer === correctAnswer) {
        setScore((score) => score + 1);
      }
    }
  }, [answer, page, questions, setScore]);

  const handleAnswer = (answer, e) => {
    setSelected(true);
    setIsDisabled(true);
    setAnswer(answer);
    if (!isTimed) {
      setTimeout(() => {
        setRevealAnswer(true);
        evalAnswer();
        setTimeout(() => {
          setSelected(false);
          setPage(page + 1);
        }, answerCD / 1.25);
      }, answerCD);
    }
  };

  // TODO: an option weather timed or not
  // TODO: make the question adjust
  // setup delays | before revealAnswer | preview correctAnswer | setPage
  useEffect(() => {
    if (isTimed) {
      const timeout = setTimeout(() => {
        setRevealAnswer(true);
        evalAnswer();
        setIsDisabled(true);
        setTimeout(() => {
          setPage(page + 1);
          setSelected(false);
        }, answerCD);
      }, timer * 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [page, evalAnswer, interval, timer, isTimed]);

  if (loading) {
    return <Spinner />;
  }

  if (!questions[page]) {
    return <Result score={score} rounds={rounds} />;
  }

  return (
    <article className="container text-center px-5">
      <div className="row g-0 d-flex justify-content-center align-items-center">
        <Question question={questions[page].question} />
        <div className={`row gx-5 ${isDisabled ? "disabled" : "enable"}`}>
          {choices.map((choice, index) => {
            return (
              <Choice
                key={index}
                choice={choice}
                handleAnswer={handleAnswer}
                isSelected={choice === answer && selected}
                isCorrect={
                  choice === questions[page].correctAnswer && revealAnswer
                }
                isIncorrect={
                  choice === answer &&
                  revealAnswer &&
                  choice !== questions[page].correctAnswer
                }
              />
            );
          })}
        </div>
        {isTimed && (
          <Timer
            interval={interval}
            revealAnswer={revealAnswer}
            timer={timer}
            setTimer={setTimer}
            answerCD={answerCD}
            page={page}
          />
        )}
      </div>
    </article>
  );
};

export default Questions;
