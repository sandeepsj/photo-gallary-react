import React, { Component } from "react";
import { Row, Tab, Col, Nav } from "react-bootstrap";
class userLogTables extends Component {
  state = {};
  data = {
    loginAuth: [
      {
        message: "logged in",
        timeStamp: 1609214270430,
      },
      {
        message: "logged in",
        timeStamp: 1609214431261,
      },
      {
        message: "logged in",
        timeStamp: 1609214689719,
      },
      {
        message: "logged in",
        timeStamp: 1609216787178,
      },
      {
        message: "logged in",
        timeStamp: 1609216932339,
      },
      {
        message: "logged in",
        timeStamp: 1609216964556,
      },
      {
        message: "logged in",
        timeStamp: 1609217017288,
      },
      {
        message: "logged in",
        timeStamp: 1609217518053,
      },
    ],
    uploadImage: [
      {
        message: "New image 0AaUdPl-NzU Uploaded",
        timeStamp: 1609214407358,
      },
      {
        message: "New image 9KVUomTO63g Uploaded",
        timeStamp: 1609214410565,
      },
      {
        message: "New image lfaqs0ZjmGo Uploaded",
        timeStamp: 1609214439578,
      },
    ],
    rename: [
      {
        message: "./storage/sandy: 9KVUomTO63g.jpg changed to tea cup",
        timeStamp: 1609214420361,
      },
      {
        message: "./storage/sandy: lfaqs0ZjmGo.jpg changed to coffee cup",
        timeStamp: 1609215108063,
      },
    ],
    logout: [
      {
        message: "User Logged out",
        timeStamp: 1609214427497,
      },
      {
        message: "User Logged out",
        timeStamp: 1609215321739,
      },
      {
        message: "User Logged out",
        timeStamp: 1609217405073,
      },
      {
        message: "User Logged out",
        timeStamp: 1609218068598,
      },
    ],
    getMyProfile: [
      {
        timeStamp: 1609214735091,
      },
      {
        timeStamp: 1609214741770,
      },
    ],
    updateProfile: [
      {
        message: "Profile Updated",
        timeStamp: 1609214740193,
      },
    ],
  };
  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        {/* <Row>
          <Col sm={3} class="bg-dark">
            <Nav variant="pills" className="flex-column">
              {Object.keys(this.data).map((key) => (
                <Nav.Item key={key}>
                  <Nav.Link eventKey={key}>{key}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content>
              {Object.keys(this.data).map((key) => (
                <Tab.Pane eventKey={key}>
                  <div>pranthannnn</div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row> */}
      </Tab.Container>
    );
  }
}

export default userLogTables;
