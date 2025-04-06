"use client"

import * as React from "react"
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

export function CartBig() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])

    return (
      <div className="w-300px bg-white">
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
                            innerRadius={45}
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
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                   text 
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
