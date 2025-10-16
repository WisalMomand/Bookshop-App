import axios from "axios";

export const fetchBooks = async (query = "bestsellers") => {
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`
    );
    return (response.data.docs || []).map((book) => ({
      key: book.key || book.cover_edition_key || book.title,
      title: book.title,
      author_name: book.author_name,
      first_publish_year: book.first_publish_year,
      cover_i: book.cover_i,
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
