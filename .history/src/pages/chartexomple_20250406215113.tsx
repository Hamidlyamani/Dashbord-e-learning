"use client"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export function Chart_Exomple() {

    
    const chartData = 
        { type: "cours", number: 70, fill: "blue", bg_border: 'yallow', text: '70', width: 21 },
    

    const chartConfig = {
        visitors: {
            label: "Pourcentage",
        }
    } satisfies ChartConfig

    if (chartData.number<25){
        fill: "blue"
         bg_border: 'yallow'
    } 

    return (
       <div className=" w-[50px]">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full"
            >
                <RadialBarChart
                    data={chartData}
                    startAngle={0}
                    endAngle={(chartData.number / 100) * 360}
                    innerRadius={chartData.width-5}
                    outerRadius={chartData.width}
                >
                    <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className={`first:fill-${chartData.bg_border} last:fill-white`}
                        polarRadius={[chartData.width-4 , chartData.width - 7]}
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
