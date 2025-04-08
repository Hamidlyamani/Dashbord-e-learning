import { cn } from "@/lib/utils";

export default function RenderDayContentSmall(
    date: Date,
    customContentDays: Record<string, { label: string; color: string; prof: string }[]>,
    isToday: boolean,
    isOutside: boolean
) {
    const dateStr = date.toISOString().split("T")[0]; 
    const events = customContentDays[dateStr];

    const dayClasses = cn(
        "flex flex-col items-center justify-center rounded-[6px] gap-0 whitespace-nowrap  font-Urb-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[>svg]:px-3 size-8 p-0  text-[12px] text-[#09294C] aria-selected:opacity-100",
        isToday && "bg-[#007AFF] text-white", // Special class for today
        isOutside && "text-muted-foreground " // Special class for outside days
    );

    if (!events) {
        return <div className={dayClasses}>{date.getDate()}</div>; // Default day content
    }

    return (
        <div className={dayClasses}>
            <span className=" ">{date.getDate()}</span>
            <div className=" flex gap-1">
                {events.map((event, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            event.color,
                            "rounded-full text-background  w-1.25 h-1.25  shadow-md"
                        )}
                    >
                       
                    </div>
                ))}
            </div>
        </div>
    );
}
