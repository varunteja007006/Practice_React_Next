const slickSettings = (
  defaultSlidesToShow = 3,
  SmallScreenSlidesToShow = 1,
  MediumScreenSlidesToShow = 2,
  largeScreenSlidesToShow = 3
) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    // fade: true,
    // centerMode: true,
    speed: 300,
    slidesToShow: defaultSlidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: MediumScreenSlidesToShow,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: SmallScreenSlidesToShow,
        },
      },
    ],
  };
  return settings;
};

export default slickSettings;
