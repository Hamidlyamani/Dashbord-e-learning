import { Calendar, CustomContentDaystype } from "@/components/ui/calendar"
import {
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

export function DatePicker() {
  const customContentDays = {
    "2025-04-07": [
      { label: "Cours", color: "bg-orange", prof: "Mr X d'anglais" },
      { label: "Cours", color: "bg-green", prof: "Mr X d'anglais" },
    ],

    "2025-04-09": [
      { label: "Cours", color: "bg-red", prof: "Mr X d'anglais" },
    ],
    "2025-04-16": [
      { label: "Cours", color: "bg-green", prof: "Mr X d'anglais" },
    ],
    "2025-04-12": [
      { label: "Cours", color: "bg-red", prof: "Mr X d'anglais" },
    ],
    "2025-05-12": [
      { label: "test", color: "bg-red", prof: "just test" },
    ],

    "2025-04-04": [
      { label: "Cours", color: "bg-yallow", prof: "Mr X d'anglais" },
    ],
  }
 
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        <Calendar customContentDays={customContentDays} className="[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]" />
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
