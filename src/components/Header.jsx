import React, { useState } from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">📚 My Bookshop</Navbar.Brand>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for a book..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" variant="primary">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
