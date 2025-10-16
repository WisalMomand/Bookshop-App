
import React, { useEffect, useState } from "react";
import { Row, Col, Spinner, Alert, Container } from "react-bootstrap";
import { fetchBooks } from "../services/booksApi";
import BookCard from "./BookCard";
import styles from "./BookList.module.css";

const BookList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchBooks(searchTerm || "bestsellers");
        setBooks(data);
      } catch {
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadBooks();
  }, [searchTerm]);

  return (
    <Container className={`${styles.bookListContainer} my-5`}>
      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-3 text-muted">Loading books...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center shadow-sm">
          {error}
        </Alert>
      )}

      {!loading && !error && books.length === 0 && (
        <div className="text-center py-5 text-muted">
          No books found for “{searchTerm}”.
        </div>
      )}

      {!loading && !error && books.length > 0 && (
        <Row className="g-4 justify-content-center">
          {books.map((book) => (
            <Col
              key={book.key}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <BookCard book={book} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default BookList;
