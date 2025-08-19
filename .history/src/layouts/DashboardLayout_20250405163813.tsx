import { AppSidebar } from "@/components/app-sidebar"
import { Header } from "@/components/mycomponents/header"

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Chat } from "@/pages/chat"
import { Home } from "@/pages/home"
export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header/>
                <div className="flex flex-1 flex-col gap-4 bg-gray-200  rounded-tl-4xl ">
                    </>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
