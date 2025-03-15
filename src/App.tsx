"use client"

import { useState } from "@lynx-js/react"
import { useNavigate } from "react-router"
import { Layout } from "./Layout.js"
import "./App.css"

export function App() {
  const nav = useNavigate()
  const [openLevel, setOpenLevel] = useState<number | null>(null)

  const toggleLevel = (level: number) => {
    setOpenLevel(openLevel === level ? null : level)
  }

  return (
    <Layout>
      <view className="pt-4 mb-8" style={{height: "50px"}}>
            <text className="text-2xl font-medium text-white">Study Resources</text>
            <text className="text-sm text-[#999] mt-1">Select a level to explore terms</text>
          </view>
        <scroll-view
          scroll-orientation="vertical"
          style={{
            height: "calc(100vh - 160px)",
            paddingLeft: "5px",
            marginTop: "5px",
            marginLeft: "5px"
          }}
        >
          {/* Minimalist Title */}
         

          {/* Minimalist Accordion */}
          {[1, 2, 3, 4].map((level) => (
            <view key={level} className="overflow-hidden bg-[#222] border-b border-[#333]">
              {/* Level Header */}
              <view
                className="py-4 flex justify-between items-center cursor-pointer transition-all duration-200"
                bindtap={() => toggleLevel(level)}
              >
                <text
                  className={`text-lg font-medium flex items-center ${
                    openLevel === level ? "text-[#E6C687]" : "text-white"
                  }`}
                >
                  <text className="mr-3 text-xl">
                    {openLevel === level ? "📖" : "📘"}
                  </text>
                  Level {level}
                </text>
                <text
                  className={`text-sm transition-transform duration-200 ${
                    openLevel === level ? "rotate-180 text-[#E6C687]" : "text-[#999]"
                  }`}
                >
                  ▼
                </text>
              </view>

              {/* Show Terms if this Level is Open */}
              {openLevel === level && (
                <view className="pl-8 pb-3 space-y-3">
                  <view className="py-3 flex items-center" bindtap={() => nav(`/level/${level}/term/1`)}>
                    <text className="text-lg mr-3">📗</text>
                    <text className="text-md text-[#ccc]">Term 1</text>
                    <text className="ml-auto text-[#999]">→</text>
                  </view>
                  <view className="py-3 flex items-center" bindtap={() => nav(`/level/${level}/term/2`)}>
                    <text className="text-lg mr-3">📗</text>
                    <text className="text-md text-[#ccc]">Term 2</text>
                    <text className="ml-auto text-[#999]">→</text>
                  </view>
                </view>
              )}
            </view>
          ))}
        </scroll-view>
    </Layout>
  )
}
