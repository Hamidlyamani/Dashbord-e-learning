"use client"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"



export type ChartSmallProps = {
    type: string
    number: number
    text: string
    width: number
}
export function Chart_Small({ type, number, text, width }: ChartSmallProps) {

    
       
    
  
    const chartConfig = {
        number: {
            label: type,
        }
    } satisfies ChartConfig

    let fill = ""
    let bg_border = ""

    if (number < 25) {
        fill = "#FF3B30"
        bg_border = "#FEE3E2"
    } else if (number < 50) {
        fill = "#FF9500"
        bg_border = "#FFE6CA"
    } else if (number < 75) {
        fill = "#FFCC00" // not yallow lol
        bg_border = "#FFE6CA"
    } else {
        fill = "#34C759"
        bg_border = "#DCFFE7"
    }
    const chartDatapassed = [
        { type: type, number: number, fill: fill },
    ]
    return (
       <>
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[100px]"
            >
                <RadialBarChart
                    data={chartDatapassed}
                    startAngle={90}
                    endAngle={(number / 100) * 360}
                    
                    innerRadius={width-5}
                    outerRadius={width}
                >
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className={`first:fill- last:fill-white`}
                        polarRadius={[width-4 , width - 6]}
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
                                                {text}
                                            </tspan>
                                           
                                        </text>
                                    )
                                }
                            }}
                        />
                    </PolarRadiusAxis>
                </RadialBarChart>
            </ChartContainer>
        </>
    )
}
