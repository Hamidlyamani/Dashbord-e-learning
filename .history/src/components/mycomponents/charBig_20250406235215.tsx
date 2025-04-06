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
    { browser: "Lecture", visitors: 275, fill: "green" },
    { browser: "Vidéos", visitors: 200, fill: "orange" },
    { browser: "Tests", visitors: 287, fill: "blue" },
    { browser: "Devoirs ", visitors: 173, fill: "yellow" },
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
                            innerRadius={40}
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
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Visitors
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
