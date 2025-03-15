"use client"

import { useParams, useNavigate } from "react-router"
import { Layout } from "./Layout.js"
import "./App.css"

export function LevelTermPage() {
  const { level, term } = useParams()
  const nav = useNavigate()

  // Sample subjects data
  const subjects = [
    { id: 1, name: "Fluid Mechanics", icon: "💧" },
    { id: 2, name: "Hydrology", icon: "🌊" },
    { id: 3, name: "Irrigation Engineering", icon: "🚿" },
    { id: 4, name: "Water Resources Planning", icon: "🗺️" },
    { id: 5, name: "Environmental Engineering", icon: "🌱" },
    { id: 6, name: "Irrigation Engineering", icon: "🚿" },
    { id: 7, name: "Water Resources Planning", icon: "🗺️" },
    { id: 8, name: "Environmental Engineering", icon: "🌱" },
    { id: 9, name: "Irrigation Engineering", icon: "🚿" },
    { id: 10, name: "Water Resources Planning", icon: "🗺️" },
    { id: 11, name: "Environmental Engineering", icon: "🌱" },
    { id: 12, name: "Irrigation Engineering", icon: "🚿" },
    { id: 13, name: "Environmental Engineering", icon: "🌱" },
    { id: 14, name: "Irrigation Engineering", icon: "🚿" },
  ]

  return (
    <Layout>
        {/* Minimalist Page Header */}
      <view className="pt-4 mb-8" style={{height: "50px"}}>
          <text className="text-2xl font-medium text-white">
            Level {level} - Term {term}
          </text>
          <text className="text-sm text-[#999] mt-1">
            Select a subject to view study materials
          </text>
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
          {/* Subjects Section */}
          <view className="space-y-6">
            <view className="space-y-3">
              {subjects.map((subject) => (
                <view
                  key={subject.id}
                  className="py-4 border-b border-[#333] flex justify-between items-center"
                  bindtap={() =>
                    nav(`/level/${level}/term/${term}/subject/${subject.id}`)
                  }
                >
                  <view className="flex items-center">
                    <text className="text-lg mr-3">{subject.icon}</text>
                    <text className="text-md text-[#ccc]">{subject.name}</text>
                  </view>
                  <text className="text-[#999]">→</text>
                </view>
              ))}
            </view>
            {/* Back Button */}
            <view className="mt-10 mb-20">
              <text
                bindtap={() => nav(`/`)}
                className="block w-full py-4 bg-[#333] text-white text-center rounded-md text-sm font-medium cursor-pointer hover:bg-[#444] active:bg-[#555] transition-colors duration-200 flex items-center justify-center"
              >
                <text className="mr-2">⬅️</text> Back to Levels
              </text>
            </view>
          </view>
        </scroll-view>
    </Layout>
  )
}
