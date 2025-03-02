import React, { useState } from 'react';
import { states } from './states-data'; // Import states data
import { useNavigate } from 'react-router-dom'; // Use useNavigate from React Router v6
import interactiveIndiaMapData from './InteractiveIndiaMapData';

const IndiaMap = () => {
    const [zoomedState, setZoomedState] = useState(null); // Track the state being zoomed in
    const [isZooming, setIsZooming] = useState(false); // Track the zoom state
    const navigate = useNavigate(); // React Router navigation

    const handleClick = (state) => {
        setZoomedState(state.id); // Set the clicked state to be zoomed
        setIsZooming(true); // Trigger zoom animation

        // Wait for animation to complete before navigating
        setTimeout(() => {
            navigate(`/state/${state.id}`); // Navigate to state URL with ID
        }, 1000); // Time should match animation duration
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-900 overflow-hidden">
            <div className="w-full h-full max-w-5xl max-h-screen">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1519 1773" // Ensures proper scaling
                    preserveAspectRatio="xMidYMid meet" // Keeps the aspect ratio
                    className="w-full h-full"
                >
                    {states.map((state) => (
                        <g key={state.id} id={state.id} title={state.name}>
                            {state.paths.map((path, index) => (
                                <a
                                    key={`${state.id}-path-${index}`}
                                    href={`#/state/${state.id}`} // Better user experience
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleClick(state); // Pass state data
                                    }}
                                >
                                    <path
                                        d={path.path}
                                        style={{
                                            fill: state.color, // Default state color
                                            stroke: state.stroke,
                                            strokeWidth: state.strokeWidth,
                                            transition: "fill 0.3s ease, transform 1s ease-in-out", // Smooth zoom
                                            transform: zoomedState === state.id ? "scale(4)" : "scale(1)", // Scale on click
                                            transformOrigin: "center",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.setAttribute("fill", path.hoverColor || state.hoverColor); // Set hover color
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.setAttribute("fill", state.color); // Reset color
                                        }}
                                    />
                                </a>
                            ))}
                        </g>
                    ))}

                    {/* State Name with ID */}
                    <g id="layer35" style={{ display: 'inline' }}>
                        <g style={{ fontSize: '24px', fill: '#ffffff', stroke: 'none', fontFamily: 'Arial' }}>
                            {Object.entries(interactiveIndiaMapData).map(([state, { x, y, id }]) => (
                                <text key={id} x={x} y={y} id={id}>
                                    <tspan x={x} y={y}>{`${state} (${id})`}</tspan> {/* Display State Name with ID */}
                                </text>
                            ))}
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default IndiaMap;
