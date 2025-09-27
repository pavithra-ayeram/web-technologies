import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostCard from './PostCard.jsx';

const posts = [
  {
    category: 'Anime',
    title: 'Jujutsu Kaisen : Why is Gojo the best?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    readTime: '5 min read',
  },
  {
    category: 'Music',
    title: 'Taylor Swift : Easter Eggs and Clues',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    readTime: '5 min read',
  },
  {
    category: 'Disney',
    title: 'Tangled : Why is it Underrated?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    readTime: '5 min read',
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="hero-section">
        <h1>Blogs</h1>
        <p>
          Dive into our collection of blogs created by Pavithra.
        </p>
      </div>

      <Container>
        <Row className="g-4">
          {posts.map((post, index) => (
            <Col key={index} md={6} lg={4}>
              <PostCard {...post} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
