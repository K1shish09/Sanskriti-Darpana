
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
        <div className="flex items-center justify-center h-screen w-full bg-gray-900 rounded-lg shadow-lg">
            <div className="bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="1519" height="1773" version="1.1">
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
                        <path d="m 635,381 -142,50 0,0 0,0" id="path4021" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 174,994 -14,45" id="path4029" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 133,1093 146,-62" id="path4037" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 650.14522,1554 c 66.79083,-23 68.41988,-22 68.41988,-22 L 642,1509" id="path4051" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1.27634037, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 1230,804 c -59,15 -59,15 -59,15" id="path4053" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 1303,833 c 46,26 46,26 46,26" id="path4055" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 1355,729 c 44,28 44,28 44,28" id="path4057" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 1381,640 c 50,24 50,24 50,24" id="path4059" style={{ fill: '#fdf9bb', fillOpacity: 1, stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 315,1290 c -33,17 -33,17 -33,17" id="path4061" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 1070.0603,609.4393 c 38.0083,-11.1491 38.0083,-11.1491 38.0083,-11.1491" id="path4065" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 434.16356,1535.4121 c -50.91168,33.9411 -50.91168,33.9411 -50.91168,33.9411" id="path4079" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                        <path d="m 262.72299,1005.3792 -90.99903,26.4191" id="path7867" style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 1, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1 }} />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default IndiaMap;
