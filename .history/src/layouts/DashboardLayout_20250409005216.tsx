import { AppSidebar } from "@/components/app-sidebar-dashboard"
import { Header } from "@/components/mycomponents/header"

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar-dashboard"
import { Home } from "@/pages/home"
import CalendarPage from "@/pages/calendarPage"
import { Chat } from "@/pages/chat"
import { useState } from "react"
export default function Page() {
    const [currentPage, setCurrentPage] = useState("home")
    const renderPage = () => {
        switch (currentPage) {
            case "chat":
                return <Chat />
            case "calendar":
                return <CalendarPage />
            case "Home":
            default:
                return <Home />
        }
    }
    return (
        <SidebarProvider>
            <AppSidebar onNavClick={setCurrentPage} activePage={currentPage} />
            <SidebarInset>
                <Header />
                <div className="flex flex-1 flex-col gap-4 relative overflow-hidden  rounded-tl-4xl ">
                    {renderPage()}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
