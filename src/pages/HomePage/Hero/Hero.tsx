import React from 'react'
import '../HomePage.css'
import './Hero.module.css'

const Hero = () => {
    return (
        <section className="dashboard-hero" aria-label="Portfolio overview">
            <div className="dashboard-hero__copy">
                <p className="dashboard-hero__eyebrow">Stock holdings analysis</p>
                <h1 className="dashboard-hero__title">A calm, modern view of your portfolio over time.</h1>
                <p className="dashboard-hero__subtitle">
                    Your backend will soon feed live positions, purchase dates, and historical prices so this view can evolve into a full ETL-driven dashboard.
                </p>
            </div>
            <div className="dashboard-hero__pill">Live-ready architecture</div>
        </section>
    )
}

export default Hero
