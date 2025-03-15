import { useNavigate } from "react-router"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const nav = useNavigate()

  return (
    <view className="min-h-screen flex flex-col bg-[#222] relative">


      {/* Page Content with Bottom Padding */}
      <view className="flex-1 py-4 pb-20 overflow-auto px-6">
        {children}
      </view>

      {/* Fixed Minimalist Tab Bar */}
      <view className="bg-[#1a1a1a] border-t border-[#333] fixed bottom-0 left-0 w-full" style={{height: "60px"}}>
        <view className="flex justify-around items-center h-16">
          <view
            bindtap={() => nav("/")}
            className="flex flex-col items-center justify-center w-1/3 h-full cursor-pointer"
          >
            <text className="text-xl mb-1">📘</text>
            <text className="text-xs text-[#999]">Home</text>
          </view>

          <view
            bindtap={() => nav("/resources")}
            className="flex flex-col items-center justify-center w-1/3 h-full cursor-pointer"
          >
            <text className="text-xl mb-1">📚</text>
            <text className="text-xs text-[#999]">Resources</text>
          </view>

          <view
            bindtap={() => nav("/about")}
            className="flex flex-col items-center justify-center w-1/3 h-full cursor-pointer"
          >
            <text className="text-xl mb-1">ℹ️</text>
            <text className="text-xs text-[#999]">About</text>
          </view>
        </view>
      </view>
    </view>
  )
}
