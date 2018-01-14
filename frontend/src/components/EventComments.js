import React, { Component } from 'react'
import { Row, Col, Form, Button, Input } from 'reactstrap'

export class EventComments extends Component {
  render() {
    const { comments } = this.props

    return (
      <Row className="eventComments">
        <Col>
          <Row className="commentsList">
            <Col>
              {comments.map((comment, i) => (
                <Row className="comment" key={comment.id}>
                  <span className="author">{comment.author.name}</span>
                  <p>{comment.text}</p>
                </Row>
              ))}
            </Col>
          </Row>
          <Row className="commentForm">
            <Form inline name="addEventComment">
              <Input
                className="mr-2"
                type="text"
                name="text"
                placeholder="Write a comment"
              />
              <Button type="submit" color="secondary">
                Send
              </Button>
            </Form>
          </Row>
        </Col>
      </Row>
    )
  }
}
