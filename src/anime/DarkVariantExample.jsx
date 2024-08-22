import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    return (
      <div className="container-fluid">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/watch001.jpeg"
                    alt="First slide"

                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/watch002.jpeg"
                    alt="Second slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./images/front1.jpeg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

      </div>
    );
}

export default DarkVariantExample;