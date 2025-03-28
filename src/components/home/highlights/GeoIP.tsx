"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Map, Globe, Network, ArrowRight, Layers, Pin } from 'lucide-react'

import MapAsset from "@/assets/map.png"

export const GeoIPSection = () => {
  return (
    <section className="py-32 relative" id="geoip">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.15),transparent_50%)]" />

        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        {/* Abstract Elements */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-medium mb-6 backdrop-blur-xl">
              <Map size={14} className="text-teal-400" />
              Featured Tool
            </div>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Compare{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-400 to-white animate-gradient">
                GeoIP Providers
              </span>{' '}
              in Real-Time
            </h2>

            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Our free tool allows you to compare multiple IP to location providers side by side.
              See which service gives you the most accurate geolocation data for any IP address.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center mt-1">
                  <Layers size={14} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Multiple Providers</h3>
                  <p className="text-white/60">Compare results from leading GeoIP databases in one view</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center mt-1">
                  <Globe size={14} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Visual Mapping</h3>
                  <p className="text-white/60">See location discrepancies visually plotted on a world map</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center mt-1">
                  <Pin size={14} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Accuracy Analysis</h3>
                  <p className="text-white/60">Determine which provider offers the most precise geolocation data</p>
                </div>
              </div>
            </div>

            <a
              href="https://ip.nantric.com"
              target="_blank"
              className="inline-flex items-center bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 text-md font-medium rounded-full shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-400/30"
            >
              Try GeoIP Tool <ArrowRight size={18} className="ml-2" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-teal-500/5 blur-3xl rounded-full" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-xl shadow-black/30">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />

              {/* Interactive GeoIP Visualization */}
              <div className="absolute inset-6">
                <div className="relative w-full h-full flex flex-col">
                  {/* Mock Tool Interface */}
                  <div className="bg-black/60 rounded-lg border border-white/10 p-4 mb-4">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-3 border border-white/10">
                        <Network size={20} className="text-teal-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">IP Geolocation Comparison</div>
                        <div className="text-xs text-white/40">Compare multiple providers at once</div>
                      </div>
                    </div>

                    <a href="https://ip.nantric.com" target="_blank" className="flex bg-black/40 rounded-md border border-white/5 p-2 mb-4">
                      <input
                        type="text"
                        readOnly
                        value="8.8.8.8"
                        className="flex-1 bg-transparent text-white border-none focus:outline-none text-sm px-2"
                      />
                      <div className="px-3 py-1 rounded-md bg-teal-500 text-black text-xs font-medium">
                        Compare
                      </div>
                    </a>
                  </div>

                  {/* World Map Visualization */}
                  <div className="flex-1 bg-black/40 rounded-lg border border-white/10 p-4 relative overflow-hidden">
                    {/* Simplified World Map */}
                    <Image src={MapAsset} alt="World Map" className="w-full h-full object-cover rounded-lg" />

                    {/* Result Panel */}
                    <div className="absolute bottom-4 right-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md p-3">
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <div className="flex items-center mb-1">
                            <div className="w-2 h-2 rounded-full bg-teal-400 mr-2" />
                            <span className="text-white/80">ipinfo.io</span>
                          </div>
                          <div className="text-white/50">Mountain View, CA</div>
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2" />
                            <span className="text-white/80">ip2location.io</span>
                          </div>
                          <div className="text-white/50">Palo Alto, CA</div>
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <div className="w-2 h-2 rounded-full bg-blue-400 mr-2" />
                            <span className="text-white/80">ip-api.com</span>
                          </div>
                          <div className="text-white/50">San Jose, CA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}