
import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
export default function CalendarPage() {
    return (
        <div className="bg-red">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <div className="grid auto-rows-min gap-4 md:grid-cols-5">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="aspect-square rounded-xl bg-muted/50" />
                            ))}
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}
