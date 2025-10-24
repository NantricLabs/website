"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Server, Globe, Cloud, ArrowRight } from 'lucide-react'

export const AnimatedDevelopmentVisual = () => {
    // Control animation sequences
    const [codeComplete, setCodeComplete] = useState(false)
    const [deploymentStarted, setDeploymentStarted] = useState(false)
    const [deploymentComplete, setDeploymentComplete] = useState(false)
    const [showUsers, setShowUsers] = useState(false)

    // Typed code animation
    const [displayedCode, setDisplayedCode] = useState('')
    const codeSnippet = `import React from 'react'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Welcome to Nantric</h1>
        <p>Building the future</p>
      </header>
      
      <main>
        <section className="hero">
          <h2>Greatness awaits!</h2>
        </section>
      </main>
    </div>
  )
}

export default App`

    useEffect(() => {
        // Code typing animation
        let currentIndex = 0
        const typingInterval = setInterval(() => {
            if (currentIndex < codeSnippet.length) {
                setDisplayedCode(codeSnippet.slice(0, currentIndex + 1))
                currentIndex++
            } else {
                clearInterval(typingInterval)
                setCodeComplete(true)

                // Start deployment animation after code is complete
                setTimeout(() => {
                    setDeploymentStarted(true)

                    // Complete deployment after animation
                    setTimeout(() => {
                        setDeploymentComplete(true)

                        // Show users connecting
                        setTimeout(() => {
                            setShowUsers(true)
                        }, 1000)
                    }, 2000)
                }, 500)
            }
        }, 20)

        return () => clearInterval(typingInterval)
    }, [])

    const serverVariants = {
        idle: { scale: 1 },
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 2
            }
        }
    }

    const connectionVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut"
            }
        }
    }

    const dataPacketVariants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        visible: {
            opacity: [0, 1, 1, 0],
            x: '100%',
            y: '0%',
            transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop" as const,
                ease: "linear"
            }
        }
    }

    return (
        <div className="h-full w-full flex flex-col">
            {/* Top Panel - Code Editor */}
            <div className="flex-1 rounded-xl border border-gray-200 bg-white mb-4 overflow-hidden flex flex-col shadow-sm">
                <div className="flex items-center bg-gray-50 px-4 py-2 border-b border-gray-200">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-4 text-xs font-mono text-gray-600">App.jsx</div>
                    <div className="ml-auto flex items-center gap-2 text-gray-700">
                        <Code size={14} className="text-teal-600" />
                        <span className="text-xs">React</span>
                    </div>
                </div>

                <div className="p-4 font-mono text-xs overflow-auto h-full flex-1 whitespace-pre">
                    <code className="text-gray-800">
                        {displayedCode}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 h-4 bg-teal-500 ml-[1px]"
                        ></motion.span>
                    </code>
                </div>

                <AnimatePresence>
                    {codeComplete && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-teal-50 text-teal-600 text-xs p-2 font-mono border-t border-teal-200 flex items-center"
                        >
                            <span className="mr-2">✓</span> Build complete. Ready to deploy.

                            {!deploymentStarted && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="ml-auto bg-teal-500 text-white rounded px-2 py-1 text-xs flex items-center gap-1 hover:bg-teal-600 transition-colors"
                                    onClick={() => setDeploymentStarted(true)}
                                >
                                    Deploy <ArrowRight size={10} />
                                </motion.button>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom Panel - Deployment Visualization */}
            <div className="h-48 rounded-xl border border-gray-200 bg-white relative overflow-hidden shadow-sm">
                <div className="absolute inset-0">
                    {/* Grid background */}
                    <div className="absolute inset-0 opacity-50">
                        <div className="h-full w-full" style={{
                            backgroundImage: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}></div>
                    </div>

                    {/* Deployment visualization */}
                    <div className="absolute inset-0 flex items-center justify-between px-10">
                        {/* Code repository */}
                        <div className="relative">
                            <motion.div
                                className="w-14 h-14 rounded-lg border border-gray-200 bg-white flex items-center justify-center shadow-sm"
                                animate={{
                                    boxShadow: deploymentStarted ? [
                                        "0 0 0 rgba(20, 184, 166, 0)",
                                        "0 0 15px rgba(20, 184, 166, 0.5)",
                                        "0 0 0 rgba(20, 184, 166, 0)"
                                    ] : "0 0 0 rgba(20, 184, 166, 0)"
                                }}
                                transition={{ duration: 2, repeat: deploymentStarted && !deploymentComplete ? Infinity : 0 }}
                            >
                                <Code size={24} className="text-teal-600" />
                            </motion.div>
                            <div className="mt-2 text-xs text-center text-gray-600">Code</div>
                        </div>

                        {/* Path from code to server */}
                        <svg width="80" height="2" className="absolute left-24 top-1/2 -translate-y-1/2">
                            <motion.path
                                d="M0 1 L80 1"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                initial="hidden"
                                animate={deploymentStarted ? "visible" : "hidden"}
                            />
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#14b8a6" />
                                <stop offset="100%" stopColor="#f0fdfa" />
                            </linearGradient>

                            {/* Data packet animation */}
                            {deploymentStarted && (
                                <motion.circle
                                    r="3"
                                    fill="#14b8a6"
                                    initial="hidden"
                                    animate="visible"
                                />
                            )}
                        </svg>

                        {/* Server infrastructure */}
                        <div className="relative">
                            <motion.div
                                className="w-14 h-14 rounded-lg border border-gray-200 bg-white flex items-center justify-center shadow-sm"
                                variants={serverVariants}
                                animate={deploymentComplete ? "pulse" : "idle"}
                            >
                                <Server size={24} className={`${deploymentComplete ? "text-teal-600" : "text-gray-400"}`} />
                            </motion.div>
                            <div className="mt-2 text-xs text-center text-gray-600">Server</div>

                            {/* Server glow effect when active */}
                            {deploymentComplete && (
                                <motion.div
                                    className="absolute -inset-2 rounded-xl bg-teal-500/20 blur-md -z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            )}
                        </div>

                        {/* Path from server to cloud */}
                        <svg width="80" height="2" className="absolute left-[calc(50%-40px)] top-1/2 -translate-y-1/2">
                            <motion.path
                                d="M0 1 L80 1"
                                stroke="url(#gradient2)"
                                strokeWidth="2"
                                initial="hidden"
                                animate={deploymentComplete ? "visible" : "hidden"}
                            />
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#14b8a6" />
                                <stop offset="100%" stopColor="#f0fdfa" />
                            </linearGradient>

                            {/* Data packet animation */}
                            {deploymentComplete && (
                                <motion.circle
                                    r="3"
                                    fill="#14b8a6"
                                    initial="hidden"
                                    animate="visible"
                                />
                            )}
                        </svg>

                        {/* Cloud infrastructure */}
                        <div className="relative">
                            <motion.div
                                className="w-14 h-14 rounded-lg border border-gray-200 bg-white flex items-center justify-center shadow-sm"
                                variants={serverVariants}
                                animate={deploymentComplete ? "pulse" : "idle"}
                            >
                                <Cloud size={24} className={`${deploymentComplete ? "text-teal-600" : "text-gray-400"}`} />
                            </motion.div>
                            <div className="mt-2 text-xs text-center text-gray-600">Cloud</div>

                            {/* Cloud glow effect when active */}
                            {deploymentComplete && (
                                <motion.div
                                    className="absolute -inset-2 rounded-xl bg-teal-500/20 blur-md -z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            )}
                        </div>

                        {/* Path from cloud to users */}
                        <svg width="80" height="2" className="absolute right-24 top-1/2 -translate-y-1/2">
                            <motion.path
                                d="M0 1 L80 1"
                                stroke="url(#gradient3)"
                                strokeWidth="2"
                                initial="hidden"
                                animate={showUsers ? "visible" : "hidden"}
                            />
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#14b8a6" />
                                <stop offset="100%" stopColor="#f0fdfa" />
                            </linearGradient>

                            {/* Data packet animation */}
                            {showUsers && (
                                <>
                                    <motion.circle
                                        r="3"
                                        fill="#14b8a6"
                                        initial="hidden"
                                        animate="visible"
                                    />
                                    <motion.circle
                                        r="3"
                                        fill="#14b8a6"
                                        initial="hidden"
                                        animate="visible"
                                        style={{ translateX: -20 }}
                                    />
                                </>
                            )}
                        </svg>

                        {/* Users/Globe */}
                        <div className="relative">
                            <motion.div
                                className="w-14 h-14 rounded-lg border border-gray-200 bg-white flex items-center justify-center shadow-sm"
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: showUsers ? 1 : 0.5 }}
                            >
                                <Globe size={24} className={`${showUsers ? "text-teal-600" : "text-gray-400"}`} />
                            </motion.div>
                            <div className="mt-2 text-xs text-center text-gray-600">Users</div>

                            {/* Users glow effect when connected */}
                            {showUsers && (
                                <motion.div
                                    className="absolute -inset-2 rounded-xl bg-teal-500/20 blur-md -z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            )}

                            {/* Multiple users connected */}
                            {showUsers && (
                                <>
                                    <motion.div
                                        className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                    </motion.div>
                                    <motion.div
                                        className="absolute -bottom-3 -right-2 w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                                    </motion.div>
                                    <motion.div
                                        className="absolute -bottom-2 -left-3 w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                                    </motion.div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}