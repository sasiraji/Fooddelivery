import React from 'react';
import './Filters.css';

const Filters = ({ activeFilter, setActiveFilter }) => {
    const filters = [
        { id: 'all', label: 'All' },
        { id: 'veg', label: 'Vegetarian' },
        { id: 'non-veg', label: 'Non-Vegetarian' },
        { id: 'budget', label: 'Under $5' },
        { id: 'premium', label: 'Premium ($10+)' },
        { id: 'lunch', label: 'Business Lunch' },
        { id: 'kathi', label: 'Kathi Rolls' },
        { id: 'curry', label: 'Curries' },
        { id: 'desserts', label: 'Desserts' },
        { id: 'beverages', label: 'Beverages' }
    ];

    return (
        <div className="filters-container">
            <div className="filters-list">
                {filters.map(filter => (
                    <button
                        key={filter.id}
                        className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter.id)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filters; 