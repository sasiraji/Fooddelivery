import React, { useContext, useState, useEffect } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from "../../Context/StoreContext"

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [filteredItems, setFilteredItems] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

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

    useEffect(() => {
        if (!food_list) return;
        
        let filtered = food_list;

        // First apply category filter
        if (category !== "All") {
            filtered = filtered.filter(item => item.category === category);
        }

        // Then apply additional filters
        switch(activeFilter) {
            case 'veg':
                filtered = filtered.filter(item => !item.name.toLowerCase().includes('chicken') && 
                    !item.name.toLowerCase().includes('mutton') && 
                    !item.name.toLowerCase().includes('egg') &&
                    !item.name.toLowerCase().includes('fish'));
                break;
            case 'non-veg':
                filtered = filtered.filter(item => item.name.toLowerCase().includes('chicken') || 
                    item.name.toLowerCase().includes('mutton') || 
                    item.name.toLowerCase().includes('egg') ||
                    item.name.toLowerCase().includes('fish'));
                break;
            case 'budget':
                filtered = filtered.filter(item => item.price < 5);
                break;
            case 'premium':
                filtered = filtered.filter(item => item.price >= 10);
                break;
            case 'lunch':
                filtered = filtered.filter(item => item.name.toLowerCase().includes('business lunch'));
                break;
            case 'kathi':
                filtered = filtered.filter(item => item.name.toLowerCase().includes('kathi'));
                break;
            case 'curry':
                filtered = filtered.filter(item => item.name.toLowerCase().includes('curry') || 
                    item.name.toLowerCase().includes('masala'));
                break;
            case 'desserts':
                filtered = filtered.filter(item => item.category === 'Desserts');
                break;
            case 'beverages':
                filtered = filtered.filter(item => item.category === 'Beverages');
                break;
            default:
                break;
        }

        setFilteredItems(filtered);
    }, [category, food_list, activeFilter]);

    if (!food_list || food_list.length === 0) {
        return (
            <div className='food-display'>
                <h2>No dishes available at the moment</h2>
                <p>Please check back later for our delicious offerings.</p>
            </div>
        );
    }

    return (
        <div className='food-display'>
            <div className='food-display-container'>
                <h2>Top dishes near you</h2>
                <div className="food-display-filters">
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
                <div className="food-display-list">
                    {filteredItems.map((item) => (
                        <FoodItem 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
                {filteredItems.length === 0 && (
                    <div className="no-results">
                        <p>No items found with the selected filters.</p>
                        <button onClick={() => setActiveFilter('all')}>Clear Filters</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FoodDisplay;
