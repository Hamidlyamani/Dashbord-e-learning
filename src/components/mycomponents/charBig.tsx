"use client"

import { Label, Pie, PieChart } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { browser: "Lecture", visitors: 775, fill: "#34C759" },
    { browser: "Vidéos", visitors: 200, fill: "#FF9600" },
    { browser: "Tests", visitors: 287, fill: "#007AFF" },
    { browser: "Devoirs ", visitors: 173, fill: "#FFCC00" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    Lecture: {
        label: "Lecture",
    },
    Vidéos: {
        label: "Vidéos",
    },
    Tests: {
        label: "Tests",
    },
    Devoirs : {
        label: "Devoirs ",
    },
   
} satisfies ChartConfig

export function ChartBig() {
    

    return (
        <div className="w-300px bg-white -my-[16px] mx-[15px] ">
                <ChartContainer
                    config={chartConfig}
                    className=" aspect-square max-h-[150px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={46}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-[#09294C] text-[#09294C] text-[16px] font-bold"
                                                >
                                                    20h 34m
                                                </tspan>
                                                
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
        </div>
    )
}
