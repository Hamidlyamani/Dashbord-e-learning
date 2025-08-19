import { AppSidebar } from "@/components/app-sidebar-dashboard"
import { Header } from "@/components/mycomponents/header"

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar-dashboard"
import CalendarPage from "@/pages/calendarPage"
import { Chart_Small } from "@/pages/chartexomple"
import { Chat } from "@/pages/chat"
import { Home } from "@/pages/home"
export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="flex flex-1 flex-col gap-4 relative overflow-hidden  rounded-tl-4xl ">
                    <Chart_Small type="cours"
                        number={90}
                        text="90"
                        width={21} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
