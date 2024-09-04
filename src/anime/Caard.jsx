// import Button from 'react-bootstrap/Button';

import img1 from './images/watch10.jpeg'
import img2 from './images/speed17.jpeg'
import img3 from './images/specialwatch2.jpeg'
import img4 from './images/specialwatch3.jpeg'
import img5 from './images/watch11.jpeg'
import img6 from './images/watch12.jpeg'
// import img6 from './images/watch12.jpeg'


import Card from 'react-bootstrap/Card';

function Caard() {
    return (

        <div className="container">
            <div className="correct">
                <div className="row">
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Blizzard</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Asphalt</Card.Title>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Trucking</Card.Title>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Moonwatch

                                </Card.Title>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={img5} />
                            <Card.Body>
                                <Card.Title>Supernova</Card.Title>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={img6} />
                            <Card.Body>
                                <Card.Title>Sphere</Card.Title>
                            </Card.Body>

                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Caard;