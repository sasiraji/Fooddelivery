import React, { useContext, useState, useEffect } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from "../../Context/StoreContext"

const FoodDisplay = ({ category }) => {
    const { food_list, isLoading } = useContext(StoreContext);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        if (!food_list) return;
        
        const filtered = food_list.filter(item => 
            category === "All" || category === item.category
        );
        setFilteredItems(filtered);
    }, [category, food_list]);

    if (isLoading) {
        return (
            <div className='food-display'>
                <h2>Loading dishes...</h2>
                <div className="loading-spinner"></div>
            </div>
        );
    }

    if (!food_list || food_list.length === 0) {
        return (
            <div className='food-display'>
                <h2>No dishes available at the moment</h2>
                <p>Please check back later for our delicious offerings.</p>
            </div>
        );
    }

    if (filteredItems.length === 0) {
        return (
            <div className='food-display'>
                <h2>No dishes found in this category</h2>
                <p>Try selecting a different category or check back later for new additions.</p>
            </div>
        );
    }

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {filteredItems.map((item) => (
                    <FoodItem 
                        key={item._id} 
                        image={item.image} 
                        name={item.name} 
                        desc={item.description} 
                        price={item.price} 
                        id={item._id}
                    />
                ))}
            </div>
        </div>
    );
}

export default FoodDisplay;
