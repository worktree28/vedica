import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [colors, setColors] = useState({
    lightBg: '#fafaf9',
    darkBg: '#e7e5e4',
    header: '#ffffff',
    footer: '#292524',
    text: '#1c1917',
  });

  const carouselItems = [
    {
      id: 1,
      title: 'Scandinavian Living Room',
      subtitle: 'Minimalist Design Collection',
      description:
        'Clean lines and natural materials create the perfect modern living space',
      image: 'Living Room Set',
      price: 'From $1,899',
    },
    {
      id: 2,
      title: 'Modern Dining Experience',
      subtitle: 'Contemporary Dining Sets',
      description:
        'Elegant dining furniture that brings family and friends together',
      image: 'Dining Room Set',
      price: 'From $1,299',
    },
    {
      id: 3,
      title: 'Bedroom Sanctuary',
      subtitle: 'Luxury Bedroom Collection',
      description:
        'Transform your bedroom into a peaceful retreat with our premium furniture',
      image: 'Bedroom Set',
      price: 'From $2,199',
    },
    {
      id: 4,
      title: 'Home Office Solutions',
      subtitle: 'Productive Workspace Furniture',
      description:
        'Create an inspiring workspace with our ergonomic and stylish office furniture',
      image: 'Office Set',
      price: 'From $899',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Apply colors to CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);

  const handleColorChange = (colorType, value) => {
    setColors((prev) => ({
      ...prev,
      [colorType]: value,
    }));
  };

  const resetColors = () => {
    setColors({
      lightBg: '#fafaf9',
      darkBg: '#e7e5e4',
      header: '#ffffff',
      footer: '#292524',
      text: '#1c1917',
    });
  };

  return (
    <div
      className='min-h-screen'
      style={{ backgroundColor: colors.lightBg, color: colors.text }}
    >
      {/* Header */}
      <header className='shadow-sm' style={{ backgroundColor: colors.header }}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <h1 className='text-2xl font-bold' style={{ color: colors.text }}>
                VEDICA
              </h1>
            </div>

            {/* Navigation */}
            <nav className='hidden md:flex space-x-8'>
              <a
                href='#'
                className='font-medium opacity-70 hover:opacity-100'
                style={{ color: colors.text }}
              >
                Home
              </a>
              <a
                href='#'
                className='font-medium opacity-70 hover:opacity-100'
                style={{ color: colors.text }}
              >
                Shop
              </a>
              <a
                href='#'
                className='font-medium opacity-70 hover:opacity-100'
                style={{ color: colors.text }}
              >
                About
              </a>
              <a
                href='#'
                className='font-medium opacity-70 hover:opacity-100'
                style={{ color: colors.text }}
              >
                Contact
              </a>
            </nav>

            {/* Right side icons */}
            <div className='flex items-center space-x-4'>
              <button className='text-stone-600 hover:text-stone-800'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>
              <button className='text-stone-600 hover:text-stone-800'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className='relative py-20'
        style={{ backgroundColor: colors.lightBg }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left content */}
            <div className='space-y-8'>
              <h2
                className='text-5xl lg:text-6xl font-light leading-tight'
                style={{ color: colors.text }}
              >
                Modern
                <br />
                <span className='font-normal'>Furniture</span>
                <br />
                Collection
              </h2>
              <p
                className='text-lg max-w-md opacity-70'
                style={{ color: colors.text }}
              >
                Discover our curated selection of contemporary furniture pieces
                that blend style, comfort, and functionality for your modern
                home.
              </p>
              <div className='flex space-x-4'>
                <button className='btn btn-primary btn-lg'>Shop Now</button>
                <button className='btn btn-outline btn-lg'>
                  View Collection
                </button>
              </div>
            </div>

            {/* Right content - Hero Image */}
            <div className='relative'>
              <div className='bg-stone-200 aspect-square rounded-lg overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center'>
                  <span className='text-stone-600 text-lg'>
                    Hero Furniture Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section
        className='relative py-20 overflow-hidden'
        style={{ backgroundColor: colors.darkBg }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h3
              className='text-3xl font-light mb-4'
              style={{ color: colors.text }}
            >
              Room Collections
            </h3>
            <p
              className='max-w-2xl mx-auto opacity-70'
              style={{ color: colors.text }}
            >
              Explore our curated room collections designed to inspire your
              perfect living space
            </p>
          </div>

          {/* JavaScript-based Carousel */}
          <div className='relative w-full h-96 md:h-[500px] rounded-2xl shadow-xl overflow-hidden'>
            <div
              className='flex transition-transform duration-500 ease-in-out h-full'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselItems.map((item) => (
                <div key={item.id} className='w-full h-full flex-shrink-0'>
                  <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2'>
                    {/* Content Side */}
                    <div
                      className='p-8 md:p-12 flex flex-col justify-center'
                      style={{ backgroundColor: colors.header }}
                    >
                      <div className='space-y-6'>
                        <div>
                          <div className='badge badge-primary mb-4'>
                            {item.subtitle}
                          </div>
                          <h4
                            className='text-3xl md:text-4xl font-light mb-4'
                            style={{ color: colors.text }}
                          >
                            {item.title}
                          </h4>
                          <p
                            className='text-lg leading-relaxed opacity-70'
                            style={{ color: colors.text }}
                          >
                            {item.description}
                          </p>
                        </div>

                        <div className='flex items-center justify-between'>
                          <div
                            className='text-2xl font-semibold'
                            style={{ color: colors.text }}
                          >
                            {item.price}
                          </div>
                          <button className='btn btn-primary'>
                            Explore Collection
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className='bg-stone-200 flex items-center justify-center'>
                      <div className='w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center'>
                        <span className='text-stone-600 text-xl font-medium'>
                          {item.image}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10'>
              <button
                onClick={prevSlide}
                className='btn btn-circle btn-sm bg-white/90 hover:bg-white border-stone-200 text-stone-700 shadow-lg'
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className='btn btn-circle btn-sm bg-white/90 hover:bg-white border-stone-200 text-stone-700 shadow-lg'
              >
                ❯
              </button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className='flex justify-center w-full py-2 gap-2 mt-8'>
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`btn btn-xs btn-circle ${
                  currentSlide === index
                    ? 'btn-primary'
                    : 'btn-outline hover:btn-primary'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Color Customization Section */}
      <section className='py-20' style={{ backgroundColor: colors.lightBg }}>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h3
              className='text-3xl font-light mb-4'
              style={{ color: colors.text }}
            >
              Customize Colors
            </h3>
            <p className='text-lg opacity-70' style={{ color: colors.text }}>
              Personalize the page colors to match your preferences
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
            {/* Light Background Color */}
            <div className='space-y-3'>
              <label
                className='block text-sm font-medium'
                style={{ color: colors.text }}
              >
                Light Background Color
              </label>
              <div className='flex items-center space-x-3'>
                <input
                  type='color'
                  value={colors.lightBg}
                  onChange={(e) => handleColorChange('lightBg', e.target.value)}
                  className='w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer'
                />
                <input
                  type='text'
                  value={colors.lightBg}
                  onChange={(e) => handleColorChange('lightBg', e.target.value)}
                  className='input input-bordered flex-1'
                  placeholder='#fafaf9'
                />
              </div>
            </div>

            {/* Dark Background Color */}
            <div className='space-y-3'>
              <label
                className='block text-sm font-medium'
                style={{ color: colors.text }}
              >
                Dark Background Color
              </label>
              <div className='flex items-center space-x-3'>
                <input
                  type='color'
                  value={colors.darkBg}
                  onChange={(e) => handleColorChange('darkBg', e.target.value)}
                  className='w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer'
                />
                <input
                  type='text'
                  value={colors.darkBg}
                  onChange={(e) => handleColorChange('darkBg', e.target.value)}
                  className='input input-bordered flex-1'
                  placeholder='#e7e5e4'
                />
              </div>
            </div>

            {/* Header Color */}
            <div className='space-y-3'>
              <label
                className='block text-sm font-medium'
                style={{ color: colors.text }}
              >
                Header Color
              </label>
              <div className='flex items-center space-x-3'>
                <input
                  type='color'
                  value={colors.header}
                  onChange={(e) => handleColorChange('header', e.target.value)}
                  className='w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer'
                />
                <input
                  type='text'
                  value={colors.header}
                  onChange={(e) => handleColorChange('header', e.target.value)}
                  className='input input-bordered flex-1'
                  placeholder='#ffffff'
                />
              </div>
            </div>

            {/* Footer Color */}
            <div className='space-y-3'>
              <label
                className='block text-sm font-medium'
                style={{ color: colors.text }}
              >
                Footer Color
              </label>
              <div className='flex items-center space-x-3'>
                <input
                  type='color'
                  value={colors.footer}
                  onChange={(e) => handleColorChange('footer', e.target.value)}
                  className='w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer'
                />
                <input
                  type='text'
                  value={colors.footer}
                  onChange={(e) => handleColorChange('footer', e.target.value)}
                  className='input input-bordered flex-1'
                  placeholder='#292524'
                />
              </div>
            </div>

            {/* Text Color */}
            <div className='space-y-3'>
              <label
                className='block text-sm font-medium'
                style={{ color: colors.text }}
              >
                Text Color
              </label>
              <div className='flex items-center space-x-3'>
                <input
                  type='color'
                  value={colors.text}
                  onChange={(e) => handleColorChange('text', e.target.value)}
                  className='w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer'
                />
                <input
                  type='text'
                  value={colors.text}
                  onChange={(e) => handleColorChange('text', e.target.value)}
                  className='input input-bordered flex-1'
                  placeholder='#1c1917'
                />
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <div className='text-center'>
            <button
              onClick={resetColors}
              className='btn btn-outline'
              style={{ borderColor: colors.text, color: colors.text }}
            >
              Reset to Default Colors
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className='py-20' style={{ backgroundColor: colors.darkBg }}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h3
              className='text-3xl font-light mb-4'
              style={{ color: colors.text }}
            >
              Featured Products
            </h3>
            <p
              className='max-w-2xl mx-auto opacity-70'
              style={{ color: colors.text }}
            >
              Handpicked pieces that represent the perfect balance of form and
              function
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Product 1 */}
            <div className='group cursor-pointer'>
              <div className='bg-stone-100 aspect-square rounded-lg overflow-hidden mb-4'>
                <div className='w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
                  <span className='text-stone-600'>Modern Chair</span>
                </div>
              </div>
              <h4 className='text-lg font-medium text-stone-800 mb-2'>
                Ergonomic Office Chair
              </h4>
              <p className='text-stone-600 mb-2'>
                Contemporary design meets comfort
              </p>
              <p className='text-xl font-semibold text-stone-800'>$299</p>
            </div>

            {/* Product 2 */}
            <div className='group cursor-pointer'>
              <div className='bg-stone-100 aspect-square rounded-lg overflow-hidden mb-4'>
                <div className='w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
                  <span className='text-stone-600'>Dining Table</span>
                </div>
              </div>
              <h4 className='text-lg font-medium text-stone-800 mb-2'>
                Minimalist Dining Table
              </h4>
              <p className='text-stone-600 mb-2'>
                Perfect for modern dining spaces
              </p>
              <p className='text-xl font-semibold text-stone-800'>$899</p>
            </div>

            {/* Product 3 */}
            <div className='group cursor-pointer'>
              <div className='bg-stone-100 aspect-square rounded-lg overflow-hidden mb-4'>
                <div className='w-full h-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
                  <span className='text-stone-600'>Sofa Set</span>
                </div>
              </div>
              <h4 className='text-lg font-medium text-stone-800 mb-2'>
                Luxury Sofa Collection
              </h4>
              <p className='text-stone-600 mb-2'>
                Comfort redefined for your living room
              </p>
              <p className='text-xl font-semibold text-stone-800'>$1,299</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className='text-white py-16'
        style={{ backgroundColor: colors.footer }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* Company Info */}
            <div className='space-y-4'>
              <h5 className='text-xl font-bold'>VEDICA</h5>
              <p className='text-stone-300'>
                Creating beautiful, functional furniture for modern living
                spaces since 2020.
              </p>
            </div>

            {/* Quick Links */}
            <div className='space-y-4'>
              <h6 className='font-semibold'>Quick Links</h6>
              <ul className='space-y-2 text-stone-300'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Shop
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className='space-y-4'>
              <h6 className='font-semibold'>Categories</h6>
              <ul className='space-y-2 text-stone-300'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Living Room
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Bedroom
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Dining Room
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Office
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className='space-y-4'>
              <h6 className='font-semibold'>Contact</h6>
              <ul className='space-y-2 text-stone-300'>
                <li>123 Furniture Street</li>
                <li>Design City, DC 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@vedica.com</li>
              </ul>
            </div>
          </div>

          <div className='border-t border-stone-700 mt-12 pt-8 text-center text-stone-400'>
            <p>&copy; 2024 VEDICA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
