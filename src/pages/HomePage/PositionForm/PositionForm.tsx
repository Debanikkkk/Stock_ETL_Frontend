import React from 'react'
import '../HomePage.css'
import './PositionForm.module.css'

const PositionForm = () => {
    return (
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
    )
}

export default PositionForm
