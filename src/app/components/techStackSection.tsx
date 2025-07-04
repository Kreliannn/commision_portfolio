"use client"
import React, { useEffect } from 'react';
import { techStack } from '../data/techStack';

const TechStackSection = () => {
  useEffect(() => {
    // Inject keyframes animation into the document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup function to remove the style when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);
 
  

  // Duplicate the array to create seamless loop
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

  return (
        <div className="">
          <div className="text-center ">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 ">
              Technologies I Use
            </h2>
          </div>
          
          {/* Container with hidden overflow */}
          <div className=" relative py-5 overflow-hidden">
            {/* Scrolling container */}
            <div 
              className="flex whitespace-nowrap "
              style={{
                width: `${techStack.length * 2 * 120}px`, // Adjust based on your item width
                animation: 'scroll 60s linear infinite'
              }}
            >
              {duplicatedTechStack.map((tech, index) => (
                <div key={index} className="mx-3 md:mx-4 flex-shrink-0 shadow-lg rounded-2xl">
                  <div className=" w-18 h-18 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center  transition-shadow duration-200">
                    <img 
                      src={tech} 
                      alt={`Technology ${index}`} 
                      className="h-13 w-13  md:h-15 md:w-15 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
};

export default TechStackSection;