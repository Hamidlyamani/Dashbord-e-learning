import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button-dashboard"
import RenderDayContentHome from "./renderDayContentHome"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {

  const customContentDays = {
    "2025-04-07": [
      { label: "Cours", color: "bg-orange", prof: "Mr X d'anglais" },
      { label: "Cours", color: "bg-green", prof: "Mr X d'anglais" },
    ],

    "2025-04-09": [
      { label: "Cours", color: "bg-red", prof: "Mr X d'anglais" },
    ],
    "2025-04-16": [
      { label: "Cours", color: "bg-green", prof: "Mr X d'anglais" },
    ],
    "2025-04-12": [
      { label: "Cours", color: "bg-red", prof: "Mr X d'anglais" },
    ],
    "2025-05-12": [
      { label: "test", color: "bg-red", prof: "just test" },
    ],

    "2025-04-04": [
      { label: "Cours", color: "bg-yallow", prof: "Mr X d'anglais" },
    ],
  }
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2 w-full",
        month: "flex flex-col gap-4 w-full",
        caption: "flex justify-start pt-1 relative items-d w-1/2",
        caption_label: "text-[12px] text-[Janvier, 2025]  font-Urb-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "w-[21px] h-[24px] bg-transparent rounded-full p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute right-16",
        nav_button_next: "absolute right-8",
        table: "w-full border-collapse space-x-1",
        head_row: "flex justify-between ",
        head_cell:
          "text-muted-foreground rounded-md w-full font-urb  text-[10px]",
        row: "flex w-full mt-2 justify-between",
        cell: cn(
          "relative p-0 text-center text-[5px] w-full flex items-center justify-center focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-12 p-0 font-urb text-[12px] aria-selected:opacity-100"
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        Day: ({ date }) => {
          const today = new Date()
          const isToday = date.toDateString() === today.toDateString()
          const isOutside =
            date.getMonth() !== today.getMonth() || date.getFullYear() !== today.getFullYear()

          return RenderDayContentHome(date, customContentDays, isToday, isOutside)
        },
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

export { Calendar }
