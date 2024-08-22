import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Trending() {
    return (

        <div className="container-fluid">
            <div className="centerr">
                <div className="row">
                    <div className="col-md-3 col-sm-5 d-flex justify-content-center">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/speed22.jpeg" />
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
                            <Card.Img variant="top" src="./images/watch12.jpeg" />
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
                            <Card.Img variant="top" src="./images/speed17.jpeg" />
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
                            <Card.Img variant="top" src="./images/speed25.jpeg" />
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

                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div>
                            <button>viewall</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trending;