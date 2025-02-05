import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="text-lg font-bold">Dyslexia Learning App</h1>
            <div>
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/lessons" className="mr-4">Lessons</Link>
                <Link to="/speech">Speech-to-Text</Link>
            </div>
        </nav>
    );
};

export default Header;
