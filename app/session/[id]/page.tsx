"use client";
import { PageContainer } from "@/components/layouts/page-container";
import { SectionContainer } from "@/components/layouts/section-container";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/typography";
import { SessionContext } from "@/contexts/session-context";
import { Phone } from "lucide-react";
import { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { getSuggestionOnAnswer, playAudio } from "@/services/questions";
import Microphone from "@/components/ui/recording-button";

export default function SessionView() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { session } = useContext(SessionContext);

  const [flow, setFlow] = useState<"welcome" | number>("welcome");

  useEffect(() => {
    console.log("api response", session);
  }, []);

  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    };

    initCamera();

    return () => {
      // Cleanup: stop the camera stream when the component unmounts
      const stream = videoRef.current?.srcObject as MediaStream | null;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <PageContainer id="session-view" className="p-12">
      <div className="session-activity-container flex flex-row items-start justify-center gap-12">
        <div className="camera-view w-fit rounded-2xl overflow-hidden shadow-2xl">
          <video ref={videoRef} width="640" height="480" autoPlay muted
            className="w-full h-[700px]"
            style={{
              transform: 'scaleX(-1)'
            }}
          />
        </div>
        <div className="chat-content-wrapper">
          {flow === "welcome" && <div className="welcome-note-wrapper grid grid-cols-1 gap-4 w-[36ch]">
            <h3 className="leading-snug tracking-tight text-3xl font-semibold">
              Welcome, Good luck for <br />
              your interview session
            </h3>
            <Text as="muted">
              You&apos;s getting started with the {session.metadata.roleName} interview session.
            </Text>
            <Button withArrow variant="gloss" className="w-fit mt-4"
              onClick={() => {
                setFlow(0);
                playAudio(session.questions[0]);
              }}
            >
              Start session
            </Button>
          </div>}
          {flow !== "welcome" && <InterviewChatContent
            question={session.questions[flow]}
            questionsLength={session.questions.length}
            setFlow={setFlow}
            flow={flow}
          />}
        </div>
      </div>
      {flow !== "welcome" && <>
        <Button variant="secondary" className="absolute bottom-6 left-6">
          Need help?
        </Button>
        <button className="bg-red-500 text-white p-5 rounded-full absolute bottom-6 right-6">
          <Phone className="w-5 h-5" />
        </button>
      </>}
    </PageContainer>
  );
};

export function InterviewChatContent({
  question,
  questionsLength,
  setFlow,
  flow
}: { question: string, questionsLength: number, setFlow: (num: number) => void, flow: number }) {
  return (
    <SectionContainer id="question-content-wrapper" className="w-[30ch]">
      <motion.div>
        <Heading as="h3">{question}</Heading>
      </motion.div>
      <Microphone question={question} />
      {flow < questionsLength && <Button onClick={() => {
        setFlow(flow + 1);
      }} className="mt-4">
        Next question
      </Button>}
    </SectionContainer >
  )
}