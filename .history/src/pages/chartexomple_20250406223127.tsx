"use client"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { useEffect } from "react"

export function Chart_Exomple() {

    
    const chartData = 
        { type: "cours", number: 90, text: '70', width: 21 }
    
  
    const chartConfig = {
        visitors: {
            label: "Pourcentage",
        }
    } satisfies ChartConfig
    let fill = ""
    let bg_border = ""

    if (chartData.number < 25) {
        fill = "#FF3B30"
        bg_border = "#FEE3E2"
    } else if (chartData.number < 50) {
        fill = "#FF9500"
        bg_border = "#FFE6CA"
    } else if (chartData.number < 75) {
        fill = "#FFCC00" // not yallow lol
        bg_border = "#FFE6CA"
    } else {
        fill = "#34C759"
        bg_border = "#DCFFE7"
    }
    const chartDatapassed = [
        { type: "cours", number: 90, fill: fill, bg_border: 'yallow', text: '70', width: 21 },
    ]
    return (
       <div className=" w-[200px] bg-white ">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full"
            >
                <RadialBarChart
                    data={chartDatapassed}
                    startAngle={0}
                    endAngle={(chartData.number / 100) * 360}
                    innerRadius={chartData.width-5}
                    outerRadius={chartData.width}
                >
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className={`first:fill- last:fill-white`}
                        polarRadius={[chartData.width-4 , chartData.width - 6]}
                        style={{ fill: bg_border }}
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
                                                {chartData.text}
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
