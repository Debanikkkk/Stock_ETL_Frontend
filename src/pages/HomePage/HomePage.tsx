import './HomePage.css'

type Holding = {
    symbol: string
    shares: number
    avgCost: number
    currentPrice: number
    allocation: string
}

const metrics = [
    { label: 'Portfolio value', value: '$126,840', change: '+4.2% today' },
    { label: 'Sharpe ratio', value: '1.31', change: 'Healthy risk-adjusted return' },
    { label: 'Best performer', value: 'NVDA', change: '+18.4% over 90d' }
]

const holdings: Holding[] = [
    { symbol: 'AAPL', shares: 18, avgCost: 183.4, currentPrice: 208.8, allocation: '38%' },
    { symbol: 'MSFT', shares: 12, avgCost: 412.2, currentPrice: 436.1, allocation: '29%' },
    { symbol: 'NVDA', shares: 7, avgCost: 112.6, currentPrice: 132.9, allocation: '21%' }
]

const history = [72.4, 74.1, 71.8, 76.3, 79.2, 83.4, 85.6, 88.7, 91.1, 94.5, 97.2, 100.4]

const chartWidth = 620
const chartHeight = 240
const padding = 24
const maxValue = Math.max(...history)
const minValue = Math.min(...history)
const linePoints = history.map((value, index) => {
    const x = padding + (index / (history.length - 1)) * (chartWidth - padding * 2)
    const y = chartHeight - padding - ((value - minValue) / (maxValue - minValue || 1)) * (chartHeight - padding * 2)
    return `${x.toFixed(1)},${y.toFixed(1)}`
})

const linePath = `M ${linePoints.join(' L ')}`
const areaPath = `M ${padding} ${chartHeight - padding} L ${linePoints.join(' L ')} L ${chartWidth - padding} ${chartHeight - padding} Z`

const HomePage = () => {
    return (
        <main className="dashboard-page">
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

            <section className="metrics-grid" aria-label="Portfolio metrics">
                {metrics.map((metric) => (
                    <article className="metric-card" key={metric.label}>
                        <p className="metric-card__label">{metric.label}</p>
                        <h2 className="metric-card__value">{metric.value}</h2>
                        <p className="metric-card__change">{metric.change}</p>
                    </article>
                ))}
            </section>

            <section className="dashboard-grid">
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

                <article className="glass-card" aria-label="Portfolio input form">
                    <div className="glass-card__header">
                        <div>
                            <p className="glass-card__eyebrow">Position intake</p>
                            <h3 className="glass-card__title">Add a new holding</h3>
                        </div>
                    </div>

                    <form className="position-form">
                        <label>
                            Symbol
                            <input type="text" placeholder="AAPL" />
                        </label>
                        <label>
                            Purchase date
                            <input type="date" />
                        </label>
                        <label>
                            Shares
                            <input type="number" placeholder="5" />
                        </label>
                        <label>
                            Cost basis
                            <input type="text" placeholder="$180.00" />
                        </label>
                        <button type="button">Queue analysis</button>
                    </form>
                </article>
            </section>

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
        </main>
    )
}

export default HomePage
