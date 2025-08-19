import { cn } from "@/lib/utils";

export default function RenderDayContent(
    date: Date,
    customContentDays: Record<string, { label: string; color: string; prof: string }[]>,
    isToday: boolean,
    isOutside: boolean
) {
    const dateStr = date.toISOString().split("T")[0]; // "YYYY-MM-DD"
    const events = customContentDays[dateStr];

    const dayClasses = cn(
        "flex flex-col items-end justify-between h-full p-1 gap-1 text-[20px]",
        isToday && "bg-[#E5F3FF] text-accent-foreground", // Special class for today
        isOutside && "text-muted-foreground bg-[#F2F2F2]" // Special class for outside days
    );

    if (!events) {
        return <div className={dayClasses}>{date.getDate()}</div>; // Default day content
    }

    return (
        <div className={dayClasses}>
            <span className=" ">{date.getDate()}</span>
            <div className="w-full">
                {events.map((event, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            event.color,
                            "rounded-[10px] text-background px-2 py-1 my-1 w-full text-left text-[8px] shadow-md"
                        )}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="font-bold">{event.label}</div>
                                <div className="text-[7px]">{event.prof}</div>
                            </div>
                            <a href=""><span className="block w-1 h-1 rotate-45 border-t border-r border-background  "></span></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
