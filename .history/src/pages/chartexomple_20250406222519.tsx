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
        { type: "cours", number: 70, fill: "blue", bg_border: 'yallow', text: '70', width: 21 }
    
  
    const chartConfig = {
        visitors: {
            label: "Pourcentage",
        }
    } satisfies ChartConfig
    let fill = ""
    let bg_border = ""

    if (chartData.number < 25) {
        fill = "red"
        bg_border = "#FEE3E2"
    } else if (chartData.number < 50) {
        fill = "orange"
        bg_border = "#FFE6CA"
    } else if (chartData.number < 75) {
        fill = "yellow" // not yallow lol
        bg_border = "#ff0000"
    } else {
        fill = "green"
        bg_border = "green-100"
    }
    console.log(bg_border, fill)
    const chartDatapassed = [
        { type: "cours", number: 70, fill: fill, bg_border: 'yallow', text: '70', width: 21 },
    ]


    useEffect(() => {
        const circles = document.querySelectorAll('.recharts-polar-grid-concentric-circle')
        if (circles.length > 0) {
            circles[0].setAttribute('fill', bg_border) // first circle
            circles[circles.length - 1].setAttribute('fill', 'white') // last circle
            console.log("ggggg")
        }
    }, [bg_border])
    return (
       <div className=" w-[50px]">
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
                        polarRadius={[chartData.width-4 , chartData.width - 7]}
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
