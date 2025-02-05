import React from "react";

const LessonCard = ({ title, description }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default LessonCard;
