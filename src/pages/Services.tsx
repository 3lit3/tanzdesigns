import { useState, useEffect } from 'react';
import { Building2, Hammer, PaintBucket, Wrench, HardHat, Leaf } from 'lucide-react';

const services = [
  {
    title: 'Architectural Design',
    description: 'Custom architectural designs that blend aesthetics with functionality.',
    icon: Building2,
    images: [
      'https://images.unsplash.com/photo-1545350724-b1c9883ef888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    title: 'Construction Management',
    description: 'Complete project management from planning to execution.',
    icon: HardHat,
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf46d5789c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    title: 'Interior Design',
    description: 'Professional interior design services for residential and commercial spaces.',
    icon: PaintBucket,
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615875020246-1832ff9f777d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    title: 'Renovation',
    description: 'Expert renovation services to transform existing spaces.',
    icon: Hammer,
    images: [
      'https://images.unsplash.com/photo-1574359411221-632a37dc060d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf46d5789c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    title: 'Structural Engineering',
    description: 'Professional structural engineering and consulting services.',
    icon: Wrench,
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf46d5789c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574359411221-632a37dc060d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    title: 'Green Building',
    description: 'Sustainable construction practices and eco-friendly solutions.',
    icon: Leaf,
    images: [
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587582345426-bf46d5789c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574359411221-632a37dc060d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  }
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [currentSlides, setCurrentSlides] = useState<{ [key: number]: number }>({});

  const handleMouseEnter = (index: number) => {
    setHoveredService(index);
    if (!currentSlides[index]) {
      setCurrentSlides({ ...currentSlides, [index]: 0 });
    }
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  useEffect(() => {
    if (hoveredService !== null) {
      const timer = setInterval(() => {
        setCurrentSlides(prev => ({
          ...prev,
          [hoveredService]: (prev[hoveredService] + 1) % services[hoveredService].images.length
        }));
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [hoveredService]);

  return (
    <div className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive construction and design services tailored to meet
            your specific needs and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  height: hoveredService === index ? '400px' : '300px',
                  transform: hoveredService === index ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {hoveredService === index ? (
                  <div className="relative w-full h-full">
                    {service.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          currentSlides[index] === imgIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <img 
                          src={image}
                          alt={`${service.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 h-full flex flex-col items-center justify-center">
                    <Icon size={48} className="text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="mb-8 text-gray-300">
            Contact us to discuss your project requirements and how we can help you achieve your goals.
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

export default Services;