import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const FilterSection = ({ cabin_class, airline, min_price, handlechange, restdata }) => {
    return (
        <div>
            <Card className='filter-design card shadow-sm' style={{ height: "94vh" }}>
                <Card.Body>

                    <div>
                        <div className='d-flex justify-content-between'>
                            <h4>Filter</h4>
                            <Button variant="outline-primary" style={{ width: "100px" }} onClick={restdata}>Reset</Button>
                        </div>
                        <Form >
                            <Form.Group className="mb-4 mt-4">
                                <Form.Label>Cabin Class</Form.Label>
                                <Form.Select onChange={handlechange} value={cabin_class} name='cabin_class'>
                                    <option>Select Cabin Class</option>
                                    <option value={"First Class"}>Frist Class</option>
                                    <option value={"Economy Class"}>Economy Class</option>
                                    <option value={"Business Class"}>Business Class</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Price" name='min_price' onChange={handlechange} value={min_price} />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Airline</Form.Label>
                                <Form.Select onChange={handlechange} name='airline' value={airline} >
                                    <option>Select Airline</option>
                                    <option value={"Air India"}>Air India</option>
                                    <option value={"IndiGo"}>IndiGo</option>
                                    <option value={"Indigo"}>Indigo</option>
                                    <option value={"GoAir"}>GoAir</option>
                                    <option value={"Vistara"}>Vistara</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FilterSection