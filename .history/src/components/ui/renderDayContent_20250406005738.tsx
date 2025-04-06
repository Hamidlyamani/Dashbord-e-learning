import { cn } from "@/lib/utils";

ex function RenderDayContent(
    date: Date,
    customContentDays: Record<
        string,
        { label: string; color: string; prof: string }[]
    >
) {
    const dateStr = date.toISOString().split("T")[0]; // "YYYY-MM-DD"

    const events = customContentDays[dateStr];
    if (!events) return <span>{date.getDate()}</span>; // default day content

    return (
        <div className="flex flex-col items-end justify-start p-1 gap-1 text-[10px]">
            <span className="font-bold text-lg">{date.getDate()}</span>
            {events.map((event, idx) => (
                <div
                    key={idx}
                    className={cn(
                        event.color,
                        "rounded-xl text-white px-2 py-1 w-full text-left text-[8px] shadow-md"
                    )}
                >
                    <div className="font-bold">{event.label}</div>
                    <div className="text-[7px]">{event.prof}</div>
                </div>
            ))}
        </div>
    );
}