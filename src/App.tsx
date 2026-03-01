import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Container, Row, Col } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Jonathon Mathieu Hello World
            </p>
            <h1> This is a Heading. </h1>
            <img
                src="https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg"
                alt="A picture of a frog"
            />
            unordered list:
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
