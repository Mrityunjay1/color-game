import React, { useState,useEffect } from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home({ data }) {
    const [content, setContent] = useState([])

    useEffect(() => {
        fetchUsers()
    },[]);

    const fetchUsers =async () =>{
        const users=await fetch("https://reqres.in/api/unknown");
        const content = await users.json();
        setContent(content.data)
    }
    return (
        <div className="home">
            {content.map((item) => {
                return (
                    <Container>
                        <Row>
                            <Col>
                            <Link to={`/resources/${item.id}`}><Card style={{backgroundColor: (item.color)}} className="cards" key={item.id}>
                                <Card.Body >
                                    <Card.Title className="title">{item.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted subtitle">{item.year}</Card.Subtitle>
                                </Card.Body>
                            </Card></Link>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </div>
    )
}
