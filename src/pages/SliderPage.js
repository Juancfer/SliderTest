import Slider from '../components/Slider/Slider';
import { images } from '../imagesSlider';

const SliderPage = () => {
  return (
    <div>
      <Slider images={images}></Slider>
    </div>
  );
};

export default SliderPage;
