import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../../components/FoodItem/FoodItem';
import { assets } from '../../assets/assets';
import './MenuCategoryPage.css';

const MenuCategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const { food_list } = useContext(StoreContext);
    const [sortBy, setSortBy] = useState('default');
    const [searchQuery, setSearchQuery] = useState('');

    // Format category name for comparison (convert kebab-case to title case)
    const formattedCategory = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Filter and sort foods based on the category and search query
    let categoryFoods = food_list.filter(food => 
        food.category.toLowerCase() === formattedCategory.toLowerCase() &&
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort foods based on selected option
    if (sortBy === 'price-asc') {
        categoryFoods.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        categoryFoods.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
        categoryFoods.sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div className="menu-category-page">
            <div className="menu-category-header">
                <div className="header-content">
                    <h1>{formattedCategory}</h1>
                    <p>Explore our delicious {formattedCategory.toLowerCase()} options</p>
                </div>
                <div className="header-controls">
                    <div className="search-box">
                        <img src={assets.search_icon} alt="Search" />
                        <input
                            type="text"
                            placeholder="Search items..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="sort-options">
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="default">Sort by</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="name-asc">Name: A to Z</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="menu-category-grid">
                {categoryFoods.length > 0 ? (
                    categoryFoods.map((food) => (
                        <FoodItem 
                            key={food._id} 
                            id={food._id}
                            name={food.name}
                            price={food.price}
                            description={food.description}
                            image={food.image}
                            rating={food.rating}
                        />
                    ))
                ) : (
                    <div className="no-items-message">
                        <p>No items found in this category.</p>
                        <button onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuCategoryPage; 