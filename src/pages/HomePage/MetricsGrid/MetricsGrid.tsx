import React from 'react'
import '../HomePage.css'
import { metrics } from '../data'
import './MetricsGrid.module.css'

const MetricsGrid = () => {
    return (
        <section className="metrics-grid" aria-label="Portfolio metrics">
            {metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                    <p className="metric-card__label">{metric.label}</p>
                    <h2 className="metric-card__value">{metric.value}</h2>
                    <p className="metric-card__change">{metric.change}</p>
                </article>
            ))}
        </section>
    )
}

export default MetricsGrid
