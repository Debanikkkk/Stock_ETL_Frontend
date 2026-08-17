import React from 'react'
import '../HomePage.css'
import { history, chartWidth, chartHeight, padding } from '../data'
import './PerformanceChart.module.css'

const PerformanceChart = () => {
    const maxValue = Math.max(...history)
    const minValue = Math.min(...history)
    const linePoints = history.map((value, index) => {
        const x = padding + (index / (history.length - 1)) * (chartWidth - padding * 2)
        const y = chartHeight - padding - ((value - minValue) / (maxValue - minValue || 1)) * (chartHeight - padding * 2)
        return `${x.toFixed(1)},${y.toFixed(1)}`
    })

    const linePath = `M ${linePoints.join(' L ')}`
    const areaPath = `M ${padding} ${chartHeight - padding} L ${linePoints.join(' L ')} L ${chartWidth - padding} ${chartHeight - padding} Z`

    return (
        <article className="glass-card glass-card--wide" aria-label="Portfolio value chart">
            <div className="glass-card__header">
                <div>
                    <p className="glass-card__eyebrow">Performance trend</p>
                    <h3 className="glass-card__title">Portfolio value over time</h3>
                </div>
                <span className="chip">12 months</span>
            </div>

            <svg className="performance-chart" viewBox={`0 0 ${chartWidth} ${chartHeight}`} role="img" aria-label="Portfolio value chart">
                <defs>
                    <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(56, 189, 248, 0.38)" />
                        <stop offset="100%" stopColor="rgba(56, 189, 248, 0.03)" />
                    </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#areaFill)" />
                <path d={linePath} fill="none" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" />
            </svg>
        </article>
    )
}

export default PerformanceChart
