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
    { browser: "safari", number: 200, fill: "blue", bg_border: 'yallow', text: '70', width:21 },
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
  const  width=21;
    return (
       <div className=" w-[200px]">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full"
            >
                <RadialBarChart
                    data={chartData}
                    startAngle={0}
                    endAngle={250}
                    innerRadius={chartData[0].bg_border-5}
                    outerRadius={chartData[0].bg_border}
                >
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className={`first:fill-${chartData[0].bg_border} last:fill-white`}
                        polarRadius={[chartData[0].bg_border-4 , chartData[0].bg_border - 7]}
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
                                                className="fill-foreground text-[9px] font-bold"
                                            >
                                                {chartData[0].text}
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
