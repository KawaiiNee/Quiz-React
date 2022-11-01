import { useState, useEffect, useCallback } from "react";
import axios from "axios";
export const useGetQuestions = (url, query) => {
  let api_url = url;
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [initScore, setInitScore] = useState(0);

  if (query) {
    api_url = `${api_url}?${query}`;
    console.log(api_url);
  }

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(api_url);
      const newQuestions = data.map((item) => {
        const { correctAnswer, incorrectAnswers, question, id } = item;
        return {
          id,
          correctAnswer,
          incorrectAnswers,
          question,
        };
      });

      setQuestions(newQuestions);
      setLoading(false);
      setInitScore(0);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [api_url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, questions, initScore };
};
