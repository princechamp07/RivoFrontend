import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
  {
    name: 'Emily Wilson',
    feedback: 'The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I\'m beyond satisfied!',
  },
  {
    name: 'John Doe',
    feedback: 'Fantastic service and high-quality clothing! The customer support team was incredibly helpful, and the shipping was faster than expected. Will definitely shop here again!',
  },
  {
    name: 'Sarah Brown',
    feedback: 'Loved the variety of styles available! The ordering process was straightforward, and the items arrived in perfect condition. I highly recommend this store!',
  },
  {
    name: 'Michael Lee',
    feedback: 'A great selection of clothes and superb customer service. The product quality exceeded my expectations. I will be returning for more.',
  },
];

const Feedback = () => {
  // Slider settings for the grid effect
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust for mobile
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024, // On desktop, show 3 feedbacks
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // On tablet, show 2 feedbacks
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480, // On mobile, show 1 feedback
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center py-14 m-auto text-center px-4">
      <div className="text-green-800 text-3xl font-serif mb-6">
        <div className="font-bold">Feedback Corner</div>
      </div>

      <div className="md:px-24">
        {/* React Slider */}
        <Slider {...settings}>
          {feedbacks.map((item, index) => (
            <div key={index} className="px-6 py-6">
              <div className="border border-green-800 rounded-lg shadow-lg p-14">
                <div className="text-xl font-bold text-green-800 font-serif">
                  {item.name}
                </div>
                <div className="md:h-24 text-center text-slate-600 text-sm">
                  {item.feedback}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
