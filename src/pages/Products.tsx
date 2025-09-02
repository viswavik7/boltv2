import React, { useState } from 'react';
import { Star, Filter, Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: "Premium Whey Protein",
      price: 49.99,
      originalPrice: 59.99,
      image: "/assets/products/whey-protein-1.jpg",
      category: "Supplements",
      rating: 4.8,
      reviews: 124,
      inStock: true
    },
    {
      id: 2,
      name: "Adjustable Dumbbells Set",
      price: 299.99,
      originalPrice: 349.99,
      image: "/assets/products/dumbbells-1.jpg",
      category: "Equipment",
      rating: 4.9,
      reviews: 87,
      inStock: true
    },
    {
      id: 3,
      name: "Performance Tank Top",
      price: 24.99,
      originalPrice: 29.99,
      image: "/assets/products/tank-top-1.jpg",
      category: "Apparel",
      rating: 4.7,
      reviews: 203,
      inStock: true
    },
    {
      id: 4,
      name: "Resistance Bands Set",
      price: 19.99,
      originalPrice: 24.99,
      image: "/assets/products/resistance-bands-1.jpg",
      category: "Accessories",
      rating: 4.6,
      reviews: 156,
      inStock: true
    },
    {
      id: 5,
      name: "Creatine Monohydrate",
      price: 29.99,
      originalPrice: 34.99,
      image: "/assets/products/creatine-1.jpg",
      category: "Supplements",
      rating: 4.5,
      reviews: 98,
      inStock: false
    },
    {
      id: 6,
      name: "Yoga Mat Premium",
      price: 39.99,
      originalPrice: 49.99,
      image: "/assets/products/yoga-mat-1.jpg",
      category: "Equipment",
      rating: 4.8,
      reviews: 176,
      inStock: true
    },
    // Placeholder products - REPLACE WITH YOUR OWN
    {
      id: 7,
      name: "YOUR PRODUCT NAME HERE",
      price: 0.00,
      originalPrice: 0.00,
      image: "/assets/products/placeholder-1.jpg",
      category: "Supplements",
      rating: 0,
      reviews: 0,
      inStock: true
    },
    {
      id: 8,
      name: "YOUR PRODUCT NAME HERE",
      price: 0.00,
      originalPrice: 0.00,
      image: "/assets/products/placeholder-2.jpg",
      category: "Equipment",
      rating: 0,
      reviews: 0,
      inStock: true
    }
  ];

  const categories = ['All', 'Supplements', 'Equipment', 'Apparel', 'Accessories'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600 text-lg">
            Discover our complete range of health and fitness products
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter size={20} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Category:</span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="relative">
                <div className="aspect-square p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {!product.inStock && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Out of Stock
                  </div>
                )}
                {product.originalPrice > product.price && product.price > 0 && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Sale
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                                      <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  {product.rating > 0 && (
                    <div className="flex items-center text-yellow-400">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs text-gray-600 ml-1">{product.rating} ({product.reviews})</span>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {product.price > 0 ? (
                      <>
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-400">Coming Soon</span>
                    )}
                  </div>
                </div>
                <button
                  disabled={!product.inStock || product.price === 0}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    product.inStock && product.price > 0
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.price === 0 ? 'Coming Soon' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;