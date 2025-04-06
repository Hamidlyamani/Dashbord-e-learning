import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import RenderDayContent from "./renderDayContent"

function FullCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const customGreenDate = new Date(2025, 3, 8)

  const customContentDays = [
    "2025-04-07": [
      { label: "Cours", color: "bg-orange", prof: "Mr X d'anglais" },
      { label: "Cours", color: "bg-green", prof: "Mr X d'anglais" },
    ],
  
      "2025-04-09": [
        { label: "Cours", color: "bg-orange", prof: "Mr X d'anglais" },
      ],
  
      "2025-04-06": [
        { label: "Cours", color: "bg-green", prof: "Mr X d'anglais" },
      ],
    }]
  return (
    <DayPicker
      modifiers={{
        greenDay: [customGreenDate],
        ...props.modifiers,
      }}
      modifiersClassNames={{
        greenDay: "bg-green-500 text-white", // your green style
        ...props.modifiersClassNames,
      }}
      showOutsideDays={showOutsideDays}
      className={cn("py-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4 w-full",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "grid auto-rows-min  md:grid-cols-7",
        head_cell:
          "text-muted-foreground rounded-md  font-normal text-[0.8rem]",
        row: "grid auto-rows-min  md:grid-cols-7 w-full mt-2",
        cell: cn(
          "relative p-0 text-center aspect-square  text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-full h-full aspect-square p-2 font-normal  aria-selected:opacity-100 justify-end items-start text-[25px] font-Urb-Black"
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary  aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary  aria-selected:text-primary-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary  hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-[#E5F3FF] text-accent-foreground ",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground bg-[#F2F2F2] ",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        
        ...classNames,
      }}
      components={{
        Day: ({ date }) => RenderDayContent(date, customContentDays),
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}

export { FullCalendar }
