import { render, fireEvent } from '@testing-library/react';
import Slider from './Slider';
import { images } from '../../imagesSlider';

describe('Slider component', () => {
  let component;

  beforeEach(() => {
    component = render(<Slider images={images}></Slider>);
  });

  test('renders without crashing', () => {
    const slider = component.getByTestId('slider-component');
    expect(slider).toBeInTheDocument();
  });

  test('displays the first image on initial render', () => {
    const titleFirstImage = component.container.querySelector('.slider__title');
    expect(titleFirstImage).toHaveTextContent(images[0].title);
  });

  test('changes the displayed image when the "Siguiente" button is clicked', () => {
    const titleFirstImage = component.container.querySelector('.slider__title');
    expect(titleFirstImage).toHaveTextContent(images[0].title);

    const nextButton = component.container.querySelector('.slider__button--next');
    fireEvent.click(nextButton);

    expect(titleFirstImage).toHaveTextContent(images[1].title);
  });

  test('changes the displayed image when the "Anterior" button is clicked', () => {
    const titleImage = component.container.querySelector('.slider__title');
    expect(titleImage).toHaveTextContent(images[0].title);

    const prevButton = component.container.querySelector('.slider__button--prev');
    fireEvent.click(prevButton);

    expect(titleImage).toHaveTextContent(images[2].title);
  });

  test('displays images with the correct src', () => {
    // TO DO
  });
});
