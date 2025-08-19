import * as React from "react"


import logo from "@/assets/imgs/Logo.png"
import calender from "@/assets/imgs/calender.png"
import chat from "@/assets/imgs/chat.png"
import folder from "@/assets/imgs/folder.png"
import leaderboard from "@/assets/imgs/leaderboard.png"
import library from "@/assets/imgs/library.png"
import notes from "@/assets/imgs/notes.png"
import school from "@/assets/imgs/school.png"
import info from "@/assets/imgs/info.png"
import { NavMain } from "@/components/nav-main-dashboard"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar-dashboard"

// This is sample data.
const data = {
  navMain: [
    {
      title: "leaderboard",
      url: "#",
      icon: leaderboard,
      isActive: true,
    },
    {
      title: "library",
      url: "#",
      icon: library,
    },
    {
      title: "school",
      url: "#",
      icon: school,
    },
    {
      title: "chat",
      url: "#",
      icon: chat,
    },
    {
      title: "notes",
      url: "#",
      icon: notes,
    },
    {
      title: "folder",
      url: "#",
      icon: folder,
    },
    {
      title: "calender",
      url: "#",
      icon: calender,
    },

  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="logo flex justify-center my-4 "><img src={logo} className="w-[43px]" alt="" /></div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="footer_sidebar flex justify-center mb-3">
          <a href="#">  <img src={info} alt="" /></a>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
