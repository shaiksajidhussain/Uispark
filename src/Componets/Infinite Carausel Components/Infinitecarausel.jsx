// src/Carousel.js
import React, { useEffect } from 'react';
import './Infinitecarausel.css';

const Infinitecarausel = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true');

        const scrollerInner = scroller.querySelector('.scroller_inner');
        const scrollerInnerContent = Array.from(scrollerInner.children);

        scrollerInnerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    addAnimation();
  }, []);

  return (
    <div>
      <div className="scroller">
        <ul className="img-list scroller_inner">
          <li>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png" alt="" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png" alt="" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png" alt="" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png" alt="" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png" alt="" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png" alt="" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png" alt="" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png" alt="" />
          </li>
          <li>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1717312533/U__7_-removebg-preview_mlasct.png" alt="" />
          </li>
          {/* Add more images as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Infinitecarausel;
