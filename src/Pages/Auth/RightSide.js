import React from 'react';
import {Form, Button} from 'react-bootstrap';

const RightSide = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group>
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <br/>
                <Button variant="primary" size="md" block>
                    Block level button
                </Button>
            </Form>
        </div>
    )
}

export default RightSide;