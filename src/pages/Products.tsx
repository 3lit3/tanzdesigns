import { useState, useEffect } from 'react';

const products = [
  {
    name: 'Construction Materials',
    description: 'High-quality building materials including cement, steel, and aggregates.',
    images: [
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf46d5789c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    name: 'Pre-fabricated Components',
    description: 'Factory-made building components for faster construction.',
    images: [
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf46d5789c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    name: 'Architectural Products',
    description: 'Doors, windows, and other architectural elements.',
    images: [
      'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf46d5789c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    name: 'Interior Finishes',
    description: 'High-end interior finishing materials and products.',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf46d5789c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  }
];

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [currentSlides, setCurrentSlides] = useState<{ [key: number]: number }>({});

  const handleMouseEnter = (index: number) => {
    setHoveredProduct(index);
    if (!currentSlides[index]) {
      setCurrentSlides({ ...currentSlides, [index]: 0 });
    }
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  useEffect(() => {
    if (hoveredProduct !== null) {
      const timer = setInterval(() => {
        setCurrentSlides(prev => ({
          ...prev,
          [hoveredProduct]: (prev[hoveredProduct] + 1) % products[hoveredProduct].images.length
        }));
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [hoveredProduct]);

  return (
    <div className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of construction products and materials
            to meet all your building needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ height: hoveredProduct === index ? '500px' : '400px' }}
            >
              {product.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlides[index] === imgIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${product.name} - Image ${imgIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-200 text-lg">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8">
            Looking for specific products or materials? Contact our team for detailed
            information and pricing.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;