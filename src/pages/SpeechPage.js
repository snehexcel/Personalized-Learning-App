import React from "react";
import Header from "../components/Header";
import SpeechToText from "../components/SpeechToText";

const SpeechPage = () => {
    return (
        <div className="p-5">
            <Header />
            <SpeechToText />
        </div>
    );
};

export default SpeechPage;
