import Carousel from 'react-bootstrap/Carousel';

const Carrossel = () => {
    return (
        <>
        <Carousel data-bs-theme="light">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./src/assets/img/carrossel1.webp"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./src/assets/img/carrossel2.webp"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./src/assets/img/carrossel3.webp"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Carrossel