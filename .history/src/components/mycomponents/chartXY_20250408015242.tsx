"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"




const chartConfig = {
    Lecture: {
        label: "Lecture",
        color: "red",
    },
    Tests: {
        label: "Tests ",
        color: "blue",
    },
    Videos: {
        label: "Videos ",
        color: "green",
    },
} satisfies ChartConfig

type ChartDatapoint = {
    Lecture: number
    Tests: number
    Videos: number
    jour: string
}

type ChartXYProps = {
    chartData: ChartDatapoint[] // ✅ Now chartData is an array inside an object
}
export function ChartXY({ chartData }: ChartXYProps) {

    return (
      
        <div className="h-[110px] bg-white ">
            <ChartContainer config={chartConfig}  >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                    height={110}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    >
                        <XAxis
                        dataKey="jour"
                            tickLine={false}
                            axisLine={false}
                        tickMargin={2} tick={{ fontSize: 10 }}
                            tickFormatter={(value) => value.slice(0, 2)}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 30]} tickMargin={2}
                       
                    />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillLecture" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="red"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="60%"
                                    stopColor="red"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        <linearGradient id="fillTests" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="blue"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="60%"
                                    stopColor="blue"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        <linearGradient id="fillVideos" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="green"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="60%"
                                    stopColor="green"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="Tests"
                            type="natural"
                            fill="url(#fillTests)"
                            fillOpacity={0.4}
                            stroke="var(--color-Tests)"
                        height={110}
                        />
                        <Area
                        dataKey="Lecture"
                            type="natural"
                        fill="url(#fillLecture)"
                            fillOpacity={0.4}
                        stroke="var(--color-Lecture)"
                        height={110}
                        />
                        <Area
                        dataKey="Videos"
                            type="natural"
                        fill="url(#fillVideos)"
                            fillOpacity={0.4}
                        stroke="var(--color-Videos)"
                        height={110}
                        />
                    </AreaChart>
                </ChartContainer>
        </div>
    )
}
