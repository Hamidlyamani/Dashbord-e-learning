import { AppSidebar } from "@/components/app-sidebar-dashboard"
import { Header } from "@/components/mycomponents/header"

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar-dashboard"
import CalendarPage from "@/pages/calendarPage"
import { Chat } from "@/pages/chat"
import { Home } from "@/pages/home"
export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="flex flex-1 flex-col gap-4 relative overflow-hidden  rounded-tl-4xl ">
                    <Chart_Exomple />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
