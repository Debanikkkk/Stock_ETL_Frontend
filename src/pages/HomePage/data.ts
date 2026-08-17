export type Holding = {
    symbol: string
    shares: number
    avgCost: number
    currentPrice: number
    allocation: string
}

export const metrics = [
    { label: 'Portfolio value', value: '$126,840', change: '+4.2% today' },
    { label: 'Sharpe ratio', value: '1.31', change: 'Healthy risk-adjusted return' },
    { label: 'Best performer', value: 'NVDA', change: '+18.4% over 90d' }
]

export const holdings: Holding[] = [
    { symbol: 'AAPL', shares: 18, avgCost: 183.4, currentPrice: 208.8, allocation: '38%' },
    { symbol: 'MSFT', shares: 12, avgCost: 412.2, currentPrice: 436.1, allocation: '29%' },
    { symbol: 'NVDA', shares: 7, avgCost: 112.6, currentPrice: 132.9, allocation: '21%' }
]

export const history = [72.4, 74.1, 71.8, 76.3, 79.2, 83.4, 85.6, 88.7, 91.1, 94.5, 97.2, 100.4]

export const chartWidth = 620
export const chartHeight = 240
export const padding = 24
