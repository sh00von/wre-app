"use client"

import { useParams, useNavigate } from "react-router"
import { Layout } from "./Layout.js"
import "./App.css"

export function SubjectNotesPage() {
  const { level, term, subject } = useParams()
  const nav = useNavigate()

  // Sample subjects data to get the current subject
  const subjects = [
    { id: 1, name: "Fluid Mechanics", icon: "💧" },
    { id: 2, name: "Hydrology", icon: "🌊" },
    { id: 3, name: "Irrigation Engineering", icon: "🚿" },
    { id: 4, name: "Water Resources Planning", icon: "🗺️" },
    { id: 5, name: "Environmental Engineering", icon: "🌱" },
  ]

  // Find the current subject
  const currentSubject = subjects.find((s) => s.id.toString() === subject) || subjects[0]

  // Sample notes data
  const notes = [
    { id: 1, title: "Introduction to the Subject", type: "PDF", icon: "📄" },
    { id: 2, title: "Key Concepts and Principles", type: "PDF", icon: "📄" },
    { id: 3, title: "Practical Applications", type: "Video", icon: "🎥" },
    { id: 4, title: "Problem Solving Techniques", type: "PDF", icon: "📄" },
    { id: 5, title: "Review and Practice Questions", type: "Assignment", icon: "📝" },
    { id: 6, title: "Introduction to the Subject", type: "PDF", icon: "📄" },
    { id: 7, title: "Key Concepts and Principles", type: "PDF", icon: "📄" },
    { id: 8, title: "Practical Applications", type: "Video", icon: "🎥" },
    { id: 9, title: "Problem Solving Techniques", type: "PDF", icon: "📄" },
    { id: 10, title: "Review and Practice Questions", type: "Assignment", icon: "📝" },
  ]

  return (
    <Layout>
      {/* Minimalist Page Header */}
      <view className="pt-4 mb-8" style={{height: "50px"}}>
        <text className="text-2xl font-medium text-white">
          {currentSubject.icon} {currentSubject.name}
        </text>
        <text className="text-sm text-[#999] mt-1">
          Level {level} - Term {term} study materials
        </text>
      </view>

      {/* Notes Section */}
      <view className="space-y-6">
        <scroll-view
          scroll-orientation="vertical"
          style={{
            height: "calc(100vh - 160px)",
            paddingLeft: "5px",
            marginTop: "5px",
            marginLeft: "5px"
          }}
        >
          {notes.map((note) => (
            <view key={note.id} className="py-4 border-b border-[#333] flex justify-between items-center">
              <view className="flex items-center">
                <text className="text-lg mr-3">{note.icon}</text>
                <view>
                  <text className="text-md text-[#ccc]">{note.title}</text>
                  <text className="text-xs text-[#777] mt-1">{note.type}</text>
                </view>
              </view>
              <text className="text-[#E6C687] text-sm cursor-pointer">View</text>
            </view>
          ))}
        {/* Back Button */}
        <view className="mt-10 mb-20">
          <text
            bindtap={() => nav(`/level/${level}/term/${term}`)}
            className="block w-full py-4 bg-[#333] text-white text-center rounded-md text-sm font-medium cursor-pointer hover:bg-[#444] active:bg-[#555] transition-colors duration-200 flex items-center justify-center"
          >
            <text className="mr-2">⬅️</text> Back to Subjects
          </text>
        </view>
        </scroll-view>
      </view>
    </Layout>
  )
}

