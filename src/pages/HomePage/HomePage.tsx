import './HomePage.css'
import React from 'react'
import Hero from './Hero/Hero'
import MetricsGrid from './MetricsGrid/MetricsGrid'
import PerformanceChart from './PerformanceChart/PerformanceChart'
import PositionForm from './PositionForm/PositionForm'
import HoldingsList from './HoldingsList/HoldingsList'
import AIChat from './AIChat/AIChat'

const HomePage = () => {
    return (
        <main className="dashboard-page">
            <Hero />

            <MetricsGrid />

            <section className="dashboard-grid">
                <PerformanceChart />

                <div className="sidebar-stack">
                    <PositionForm />
                    <AIChat />
                </div>
            </section>

            <HoldingsList />
        </main>
    )
}

export default HomePage
