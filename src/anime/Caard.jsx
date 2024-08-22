// import Button from 'react-bootstrap/Button';




import Card from 'react-bootstrap/Card';

function Caard() {
    return (

        <div className="container">
            <div className="correct">
                <div className="row">
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="./images/watch10.jpeg" />
                            <Card.Body>
                                <Card.Title>Blizzard</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="./images/speed17.jpeg" />
                            <Card.Body>
                                <Card.Title>Asphalt</Card.Title>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="./images/specialwatch2.jpeg" />
                            <Card.Body>
                                <Card.Title>Trucking</Card.Title>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="./images/specialwatch3.jpeg" />
                            <Card.Body>
                                <Card.Title>Moonwatch

                                </Card.Title>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="./images/watch11.jpeg" />
                            <Card.Body>
                                <Card.Title>Supernova</Card.Title>
                            </Card.Body>

                        </Card>
                    </div>
                    <div className="col-md-2 col-sm-6 d-flex justify-content-center">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src="./images/watch12.jpeg" />
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