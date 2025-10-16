import React from "react";
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={coverUrl} alt={book.title} className={styles.image} />
      </div>

      <div className={styles.cardBody}>
        <h5 className={styles.title}>{book.title}</h5>
        <p className={styles.author}>
          <strong>Author:</strong>{" "}
          {book.author_name ? book.author_name.join(", ") : "Unknown"}
        </p>
        <p className={styles.year}>
          <strong>First Published:</strong> {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
