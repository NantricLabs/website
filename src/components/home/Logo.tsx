import React from 'react';

export const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent" />
                    <span className="font-bold text-xl relative z-10">∠</span>
                </div>
                <div className="absolute -inset-1 bg-teal-500/20 rounded-full blur-md -z-10 opacity-50" />
            </div>
            <h1 className="text-xl tracking-tight">NANTRIC</h1>
        </div>
    );
};
