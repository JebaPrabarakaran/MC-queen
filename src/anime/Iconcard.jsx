// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function Iconcard() {
    return (

        <div className="container">
            <div className="icon">
                <div className="row">
                    <div className="col-md-3 col-sm-6 d-flex justify-content-center">

                        <div className="iconOuter">
                            <div className="iconLeft">
                                <img src="./images/Units.png" alt="" />
                            </div>
                            <p className="content mb-0 pt-0">
                                <b>20Mn+</b> <br />
                                <div className="dis">
                                    UNITS SOLD</div>
                            </p>
                        </div>
                    </div>

                    
                    <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                        <div className="iconOuter">
                            <div className="iconLeft">  <img src="./images/Reviews.png" alt="" /></div>
                            <p className="content mb-0 pt-0">
                                <b>20Mn+</b> <br />
                                <div className="dis">
                                    PRODUCT REVIEWS</div>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                        <div className="iconOuter">
                            <div className="iconLeft">  <img src="./images/Growth.png" alt="" /></div>
                            <p className="content mb-0 pt-0">
                                <b>100% YOY</b><br />
                                <div className="dis">
                                    400% QOQ GROWTH</div>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 d-flex justify-content-center">
                        <div className="iconOuter">
                            <div className="iconLeft">  <img src="./images/Time.png" alt="" /></div>
                            <p className="content mb-0 pt-0">
                                <b>1 UNIT SOLD</b><br />
                                <div className="dis">
                                    EVERY 05 SEC </div>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Iconcard;