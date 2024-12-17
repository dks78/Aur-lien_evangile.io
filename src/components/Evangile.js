import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../card.css'; // Ensure the CSS file is imported

// Images (Example Images, you can replace these with actual image imports)
const images = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
  "https://picsum.photos/800/400?random=4",
  "https://picsum.photos/800/400?random=5",
  "https://picsum.photos/800/400?random=6"
];

export const Evangile = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const showSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const handleAction = (action) => {
    if (action === 'next') {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (action === 'prev') {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <section className='Evangile'>
      <div className="module-headerEvangile">
        <h2 className="module-titleEvangile">
          Evangile <span>les bases</span>
        </h2>
      </div>
    </section>
  );
};
