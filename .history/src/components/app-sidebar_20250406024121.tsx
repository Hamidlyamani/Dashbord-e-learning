import * as React from "react"
import { DatePicker } from "@/components/date-picker"
import {
  Sidebar,
  SidebarContent
} from "@/components/ui/sidebar"

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
     
      <SidebarContent>
        <DatePicker />
        
      </SidebarContent>
    </Sidebar>
  )
}
