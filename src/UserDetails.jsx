import React, { useState, useEffect } from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import './home.css'
import './userdetails.css'

export default function UserDetails({ match }) {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetchUser()
    },[]);

    const fetchUser = async () => {
        const fetchUser = await fetch(`https://reqres.in/api/unknown/${match.params.id}`);
        const item = await fetchUser.json();
        setItem(item.data)
        console.log(item);
    }
    return (
        <div className="home">
            <Container className="container1">
                <Row>
                    <Col>
                        <Card style={{ backgroundColor: (item.color) }}  className="cards1" key={item.id}>
                            <Card.Body >
                                <Card.Title className='title'>{item.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted subtitle">{item.year}</Card.Subtitle>
                                <Card.Text>
                                    <span>Panton Value</span>
                                </Card.Text>
                                <div>
                                    <p className='pv'>{item.pantone_value}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
