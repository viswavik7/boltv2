import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - replace with actual data fetching
  const product = {
    id: 1,
    name: "Premium Whey Protein",
    price: 49.99,
    originalPrice: 59.99,
    images: [
      "/assets/products/whey-protein-1.jpg",
      "/assets/products/whey-protein-2.jpg",
      "/assets/products/whey-protein-3.jpg"
    ],
    category: "Supplements",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description: "Our Premium Whey Protein is made from the highest quality whey protein isolate, providing 25g of protein per serving. Perfect for post-workout recovery and muscle building.",
    features: [
      "25g of high-quality whey protein per serving",
      "Fast absorption for optimal recovery",
      "Available in multiple delicious flavors",
      "Third-party tested for purity",
      "Gluten-free and lactose-free options"
    ],
    specifications: {
      "Serving Size": "30g (1 scoop)",
      "Servings per Container": "33",
      "Protein per Serving": "25g",
      "Calories per Serving": "120",
      "Flavor": "Chocolate, Vanilla, Strawberry"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div>
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice > product.price && (
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <label htmlFor="quantity" className="text-sm font-medium text-gray-700 mr-2">
                    Quantity:
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex space-x-4 mb-8">
                <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="border-t bg-gray-50 px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Truck className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                  <p className="text-gray-600 text-sm">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <RotateCcw className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">30-Day Returns</h4>
                  <p className="text-gray-600 text-sm">Easy return policy</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Shield className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Guarantee</h4>
                  <p className="text-gray-600 text-sm">100% authentic products</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t px-8 py-6">
            <h3 className="font-semibold text-gray-900 mb-4">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">{key}:</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section - Placeholder */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
          <div className="text-center py-8 text-gray-500">
            <p>Review system coming soon...</p>
            <p className="text-sm mt-2">Add your review functionality here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;