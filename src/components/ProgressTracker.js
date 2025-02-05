import React, { useState } from "react";

const ProgressTracker = () => {
    const [progress, setProgress] = useState(40);

    return (
        <div className="mt-5 p-4 border rounded-lg bg-gray-100">
            <h2 className="font-bold text-lg">Your Learning Progress</h2>
            <div className="w-full bg-gray-300 rounded-full h-6 mt-2">
                <div
                    className="bg-green-500 h-6 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressTracker;
