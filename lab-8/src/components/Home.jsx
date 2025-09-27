import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-fullscreen">
      <h1 className="mb-4">Welcome to Pav's Blogs</h1>
      <Button
        className="btn-custom"
        onClick={() => navigate('/posts')}
      >
        See Posts
      </Button>
    </div>
  );
};

export default Home;
