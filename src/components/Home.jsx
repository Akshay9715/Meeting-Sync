import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import Summarizer from "./Summary";

const Home = () => {
  const [textToCopy, setTextToCopy] = useState("");
  const [language, setLanguage] = useState("en-IN");
  const [showTranscript, setShowTranscript] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showTranscriptButton, setShowTranscriptButton] = useState(false);
  textToCopy,
    {
      successDuration: 1000,
    };
  const [translatedText, setTranslatedText] = useState(""); // Store modified translated text

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: language });

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setTranslatedText(transcript); // Store final transcript when stopping
  };

  const clearTranscript = () => {
    SpeechRecognition.stopListening();
    setTranslatedText(""); // Clear translated text as well
    setTextToCopy("");
  };

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div className="text-white bg-black h-full">
      <div>
        {/* <div>
          <label htmlFor="language">Select Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en-IN">English (India)</option>
            <option value="en-US">English (US)</option>
            <option value="hi-IN">Hindi (India)</option>
            <option value="es-ES">Spanish (Spain)</option>
            <option value="fr-FR">French (France)</option>
            <option value="de-DE">German (Germany)</option>
            <option value="zh-CN">Chinese (Mandarin)</option>
          </select>
        </div> */}
        <div className=" flex justify-center text-2xl font-bold m-10">
          Start Your Meeting From Here.
        </div>
        <div className=" flex flex-grow gap-3 items-center justify-center my-12">
          <button
            onClick={() => {
              startListening();
              setShowTranscriptButton(false);
              setIsRecording(true);
            }}
            className="border rounded-md p-2 hover:cursor-pointer hover:bg-green-400 hover:text-black"
          >
            {isRecording ? "Recording in Progress" : "Start Recording"}
          </button>
          <button
            onClick={() => {
              stopListening();
              setShowTranscriptButton(true);
              setIsRecording(false);
            }}
            className="border rounded-md p-2 hover:bg-red-400 hover:text-black"
          >
            Stop Listening
          </button>
          <button
            onClick={clearTranscript}
            className="border rounded-md p-2 hover:cursor-pointer hover:text-black hover:bg-red-800 px-8"
          >
            Delete
          </button>
        </div>
        <div className=" flex flex-col justify-center items-center m-5">
          {showTranscriptButton ? (
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="border rounded-md p-2 hover:cursor-pointer relative left-3"
            >
              {showTranscript ? "Hide Transcript" : "Show Transcript"}
            </button>
          ) : null}
        </div>

        {showTranscript && (
          <div className=" flex flex-col justify-center items-center ">
            <h3 className="font-bold text-xl ">Final Translated Text:</h3>

            <textarea
              value={translatedText}
              onChange={(e) => {
                setTranslatedText(e.target.value);
              }}
              className="bg-white border  text-black h-60 w-4/5 "
            />
          </div>
        )}
      </div>
      <br />
      <Summarizer
        translatedText={translatedText}
        setTranslatedText={setTranslatedText}
      ></Summarizer>
    </div>
  );
};

export default Home;
