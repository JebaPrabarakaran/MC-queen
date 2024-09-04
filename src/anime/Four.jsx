import Card from 'react-bootstrap/Card';
import Button from './Button';

import img1 from './images/touch2.jpeg';

function Four() {
    return (

        <div className="container">
            <div className="correct">
                <div className="row">
                    <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                     F               bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/touch5.jpeg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/touch6.jpeg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/touch4.jpeg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>



                    </div>
                    <div className="container">
                        <div className="padd">
                            <div className="row">
                                <div className="col-lg12">


                                    <button>viewall</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Four;