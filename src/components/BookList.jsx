import React, { useEffect, useState } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { fetchBooks } from "../services/booksApi";
import BookCard from "./BookCard";

const BookList = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchTerm) return;

    const loadBooks = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchBooks(searchTerm);
        setBooks(data);
      } catch {
        setError("Failed to fetch books.");
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, [searchTerm]);

  return (
    <div>
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" />
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && books.length === 0 && searchTerm && (
        <div className="text-center mt-4">No books found.</div>
      )}

      <Row className="g-4 mt-2">
        {books.map((book) => (
          <Col md={4} lg={3} key={book.key}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BookList;
