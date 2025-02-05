import React, { useState } from "react";

const SpeechToText = () => {
    const [transcript, setTranscript] = useState("");

    const startSpeechRecognition = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.onresult = (event) => {
            setTranscript(event.results[0][0].transcript);
        };
        recognition.start();
    };

    return (
        <div className="p-5">
            <h2 className="font-bold text-lg">Speech-to-Text</h2>
            <button className="mt-3 p-2 bg-blue-500 text-white rounded" onClick={startSpeechRecognition}>
                Start Speaking
            </button>
            <p className="mt-3 p-2 border">{transcript}</p>
        </div>
    );
};

export default SpeechToText;
