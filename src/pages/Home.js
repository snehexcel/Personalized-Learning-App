import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="p-5">
            <Header />
            <h1 className="text-2xl font-bold">Welcome to the Dyslexia Learning App</h1>
            <p className="mt-3">Choose your personalized learning path.</p>
            <Link to="/lessons" className="mt-3 block p-2 bg-green-500 text-white rounded">Start Learning</Link>
        </div>
    );
};

export default Home;
