import { useState, useEffect } from 'react';

export default function LoadingPage() {
    const [loadingText, setLoadingText] = useState('Loading');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingText(prev => {
                if (prev === 'Loading...') return 'Loading';
                return prev + '.';
            });
        }, 500);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-6">
                {/* Spinning loader */}
                <div className="relative">
                    <div className="w-12 h-12 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
                </div>
                
                {/* Animated loading text */}
                <div className="text-slate-900 font-medium text-lg min-w-[100px] text-center">
                    {loadingText}
                </div>
                
                {/* Enhanced pulsing dots */}
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-slate-600 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-slate-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-3 h-3 bg-slate-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                
             
            </div>
        </div>
    );
}