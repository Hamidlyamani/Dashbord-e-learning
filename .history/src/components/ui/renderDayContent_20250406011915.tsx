import { cn } from "@/lib/utils";

export default function RenderDayContent(
    date: Date,
    customContentDays: Record<
        string,
        { label: string; color: string; prof: string }[]
    >
) {
    const dateStr = date.toISOString().split("T")[0]; // "YYYY-MM-DD"

    const events = customContentDays[dateStr];
    if (!events) return <div className="flex flex-col items-end justify-start p-1 gap-1 text-[18px]">{date.getDate()}</div>; // default day content

    return (
        <div className="flex flex-col items-end justify-between h-full p-1 gap-1 text-[10px]">
            <span className="font-bold text-lg">{date.getDate()}</span>
            {events.map((event, idx) => (
                <div
                    key={idx}
                    className={cn(
                        event.color,
                        "rounded-[10px] text-background px-2 py-1 w-full text-left text-[8px] shadow-md"
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
    );
}