import React, { useState } from "react";
import { Navbar, Container, Form } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.trim());
  };

  return (
    <>
      <Navbar expand="lg" className={styles.navbar}>
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#" className={styles.brand}>
            📚 My Bookshop
          </Navbar.Brand>

          <Form className={styles.searchForm}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="🔍 Search for a book..."
              value={query}
              onChange={handleChange}
            />
          </Form>
        </Container>
      </Navbar>

     
      <section className={styles.welcomeSection}>
        <Container>
          <h1 className={styles.welcomeTitle}>Welcome to My Bookshop</h1>
          <p className={styles.welcomeSubtitle}>
            Discover your next favorite story among thousands of books from all over the world.  
            Start typing to explore the magic of reading!
          </p>
        </Container>
      </section>
    </>
  );
};

export default Header;
