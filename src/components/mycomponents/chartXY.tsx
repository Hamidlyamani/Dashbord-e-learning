"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart,  XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chartForXY"




const chartConfig = {
    Lecture: {
        label: "Lecture",
        color: "#FFBD00",
    },
    Tests: {
        label: "Tests ",
        color: "#007AFF",
    },
    Videos: {
        label: "Videos ",
        color: "#34C759",
    },
} satisfies ChartConfig

type ChartDatapoint = {
    Lecture: number
    Tests: number
    Videos: number
    jour: string
}

type ChartXYProps = {
    chartData: ChartDatapoint[] 
}
export function ChartXY({ chartData }: ChartXYProps) {

    return (
      
        <div className="h-[155px] bg-white ">
            <ChartContainer config={chartConfig}  >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                    height={160}
                    margin={{ top: 0, bottom: -10, left: -35, right: 0 }}
                    >
                        <XAxis
                        dataKey="jour"
                            tickLine={false}
                            axisLine={false}
                        tickMargin={2} tick={{ fontSize: 10 }}
                            tickFormatter={(value) => value.slice(0, 1)}
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 30]}
                        tickMargin={0}
                        ticks={[0, 10, 20, 30]} // 🔥 here's the key part
                    />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillLecture" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                stopColor="var(--color-Lecture)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="60%"
                                stopColor="var(--color-Lecture)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        <linearGradient id="fillTests" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                stopColor="var(--color-Tests)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="60%"
                                stopColor="var(--color-Tests)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        <linearGradient id="fillVideos" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                stopColor="var(--color-Videos)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="60%"
                                stopColor="var(--color-Videos)"
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
