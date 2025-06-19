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
      <section className="py-5 bg-slate-50/50 w-full">
        <div className="">
          <div className="text-center mb-3">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
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
                animation: 'scroll 20s linear infinite'
              }}
            >
              {duplicatedTechStack.map((tech, index) => (
                <div key={index} className="mx-4 flex-shrink-0 shadow-lg rounded-2xl">
                  <div className=" bg-white rounded-2xl flex items-center justify-center  transition-shadow duration-200 w-20 h-20">
                    <img 
                      src={tech} 
                      alt={`Technology ${index}`} 
                      className="h-15 w-15 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default TechStackSection;