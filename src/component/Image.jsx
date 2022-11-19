import HeroMobile from "../images/hero-mobile.jpg";
import HeroDesktop from "../images/hero-desktop.jpg";

const Image = () => {
  return (
    <picture>
      <source media='(max-width: 768px)' srcSet={HeroMobile} />
      <source media='(min-width: 768px)' srcSet={HeroDesktop} />
      <img src={HeroDesktop} alt='hero' />
    </picture>
  );
};

export default Image;
