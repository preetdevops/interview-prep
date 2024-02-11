//@ts-nocheck
"use client";
import 'regenerator-runtime/runtime'

import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from './button';
import { getSuggestionOnAnswer, playAudio } from '@/services/questions';

const Microphone = ({ question }: { question: string }) => {
  const [message, setMessage] = useState("");
  const [listening, setListening] = useState(false);

  const commands = [
    {
      command: "reset",
      callback: () => resetTranscript(),
    },
    {
      command: "shut up",
      callback: () => setMessage("I wasn't talking."),
    },
    {
      command: "Hello",
      callback: () => setMessage("Hi there!"),
    },
  ];
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-GB",
      });
    }
    setListening(!listening);
  };

  return (
    <div>
      <div>
        <div>
          {!listening
            ? <Button variant='primary' onClick={toggleListening}>Start answering</Button>
            : <Button variant='secondary' onClick={toggleListening}>Stop listening</Button>}
        </div>
      </div>
      {/* <div>{message}</div> */}
      <div className='my-12 overflow-scroll h-[120px]'>
        <span className='text-sm font-normal text-neutral-400'>
          {transcript}
        </span>
      </div>
      <Button variant="gloss" onClick={async () => {
        const suggestion = await getSuggestionOnAnswer(question, transcript);
        playAudio(suggestion)
      }}>
        {"Submit & Get Suggestions"}
      </Button>
    </div>
  );
};

export default Microphone;