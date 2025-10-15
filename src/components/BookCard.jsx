import React from "react";
import { Card } from "react-bootstrap";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={coverUrl} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
        </Card.Text>
        <Card.Text>First published: {book.first_publish_year || "N/A"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;

