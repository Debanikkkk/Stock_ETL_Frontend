import React from 'react'
import '../HomePage.css'
import { holdings } from '../data'
import './HoldingsList.module.css'

const HoldingsList = () => {
    return (
        <section className="holdings-card" aria-label="Current holdings">
            <div className="glass-card__header">
                <div>
                    <p className="glass-card__eyebrow">Active positions</p>
                    <h3 className="glass-card__title">Current holdings</h3>
                </div>
                <span className="chip">Backend-ready</span>
            </div>

            <div className="holdings-list">
                {holdings.map((holding) => {
                    const gain = ((holding.currentPrice - holding.avgCost) / holding.avgCost) * 100
                    return (
                        <div className="holding-row" key={holding.symbol}>
                            <div className="holding-row__meta">
                                <strong>{holding.symbol}</strong>
                                <span>{holding.shares} shares • {holding.allocation} allocation</span>
                            </div>
                            <div className="holding-row__price">
                                <span>${holding.currentPrice.toFixed(1)}</span>
                                <strong className={gain >= 0 ? 'positive' : 'negative'}>{gain >= 0 ? '+' : ''}{gain.toFixed(1)}%</strong>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default HoldingsList
