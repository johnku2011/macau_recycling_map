import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import RecyclingMap from './components/RecyclingMap';
import SearchBar from './components/SearchBar';
// import CategoryButtons from './components/CategoryButtons';
import { fetchRecyclingPoints } from './services/api';
import './styles/App.css';

function App() {
  const [recyclingPoints, setRecyclingPoints] = useState([]);
  const [filteredPoints, setFilteredPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    const loadRecyclingPoints = async () => {
      try {
        setIsLoading(true);
        const points = await fetchRecyclingPoints();
        setRecyclingPoints(points);
        setFilteredPoints(points);
        
        // Initialize Fuse for fuzzy searching
        const fuseOptions = {
          keys: ['name_tc', 'address_tc', 'name_pt', 'address_pt'],
          threshold: 0.3,
          includeScore: true
        };
        setFuse(new Fuse(points, fuseOptions));
        
        // Extract unique categories from the points
        const uniqueCategories = [...new Set(points.map(point => point.type))];
        setCategories(uniqueCategories);
        
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load recycling points:', err);
        setError('Failed to load recycling points. Please try again later.');
        setIsLoading(false);
      }
    };
    loadRecyclingPoints();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredPoints(recyclingPoints);
      return;
    }
    
    const results = fuse.search(query);
    const filtered = results
      .map(result => result.item)
      .filter(point => activeCategory === 'All' || point.type === activeCategory);
    
    setFilteredPoints(filtered);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredPoints(recyclingPoints);
    } else {
      const filtered = recyclingPoints.filter(point => point.type === category);
      setFilteredPoints(filtered);
    }
  };

  if (isLoading) return <div>Loading recycling points...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <RecyclingMap recyclingPoints={filteredPoints} />
      {/* <CategoryButtons 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      /> */}
    </div>
  );
}

export default App;