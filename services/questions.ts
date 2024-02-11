import { EnvironmentVariable } from "@/common";
import { SessionType } from "@/contexts/session-context";
import axios from "axios";

export const generateQuestions = async (
  topic: string,
  level: PreferredLevelType
) => {
  const requestData = {
    topic,
    level,
  };

  const response = await fetch(
    `${EnvironmentVariable.backend.url}/topic-questions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.generatedQuestions;
    })
    .catch((error) => {
      console.error("Error:", error);
      return [];
    });

  return response;
};

export const playAudio = async (data: string) => {
  try {
    const requestData = {
      question: data,
    };
    const response = await axios.post(
      `${EnvironmentVariable.backend.url}/generate-audio`,
      requestData,
      {
        responseType: "blob",
      }
    );

    const audioBlob = new Blob([response.data], { type: "audio/mp3" });
    const audioUrl = URL.createObjectURL(audioBlob);

    const audio = new Audio(audioUrl);
    audio.play();
  } catch (error) {
    console.error("Error fetching or playing audio:", error);
  }
};

export const getSuggestionOnAnswer = async (
  question: string,
  answer: string
) => {
  const requestData = {
    question,
    answer,
  };

  const response = await fetch(`http://localhost:3002/suggestions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.generatedQuestions.message.content;
    })
    .catch((error) => {
      console.error("Error:", error);
      return;
    });

  console.log("suggestion response", response);
  return response;
};
