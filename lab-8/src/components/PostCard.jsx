import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PostCard = ({ category, title, description, readTime }) => {
  return (
    <Card className="card-custom">
      <Card.Body>
        <div className="flexbox">
          <span className="card-tag">{category}</span>
        </div>
        <Card.Title className='title'>{title}</Card.Title>
        <Card.Text className='description'>{description}</Card.Text>
        <Button className="btn-custom w-100">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
