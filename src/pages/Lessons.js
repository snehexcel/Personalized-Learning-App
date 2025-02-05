import React, { useState, useEffect } from "react";
import axios from "axios";
import LessonCard from "../components/LessonCard";
import Header from "../components/Header";

const Lessons = () => {
    const [level, setLevel] = useState("Beginner");
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/lessons/${level}`)
            .then(res => setLessons(res.data.lessons))
            .catch(err => console.error(err));
    }, [level]);

    return (
        <div className="p-5">
            <Header />
            <h1 className="text-2xl font-bold">Lessons</h1>
            <select className="border p-2 mt-3" onChange={e => setLevel(e.target.value)}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
            <div className="mt-3">
                {lessons.map((lesson, index) => (
                    <LessonCard key={index} title={lesson} description="Practice your skills." />
                ))}
            </div>
        </div>
    );
};

export default Lessons;
