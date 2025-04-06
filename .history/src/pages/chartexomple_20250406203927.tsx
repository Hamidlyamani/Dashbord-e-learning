"use client"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
const chartData = [
    { browser: "safari", number: 200, fill: "var(--color-safari)" },
]

const chartConfig = {
    visitors: {
        label: "Pourcentage",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function Chart_Exomple() {
    return (
       <div className=" w-[200px] bg-white">
                <ChartContainer
                    config={chartConfig}
                    className=" aspect-square "
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={250}
                        innerRadius={22}
                        outerRadius={30}
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className=""
                            polarRadius={[20, 10]}
                        />
                    <RadialBar dataKey="number"  cornerRadius={10} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
                                                    className="fill-red text-[10px] font-Urb-"
                                                >
                                                    {chartData[0].number.toLocaleString()}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
        </div>
    )
}
