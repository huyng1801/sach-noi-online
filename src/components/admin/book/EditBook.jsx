import React, { useState, useEffect } from 'react';

const EditBook = ({ book, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(book.title);
  const [genre, setGenre] = useState(book.genre);
  const [author, setAuthor] = useState(book.author);
  const [narrator, setNarrator] = useState(book.narrator);
  const [listenerCount, setListenerCount] = useState(book.listenerCount);
  const [audioUrl, setAudioUrl] = useState(book.audioUrl);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate({ ...book, title, genre, author, narrator, listenerCount, audioUrl });
  };

  useEffect(() => {
    // Khi `book` thay đổi (khi chỉnh sửa sách khác), cập nhật lại các trường state
    setTitle(book.title);
    setGenre(book.genre);
    setAuthor(book.author);
    setNarrator(book.narrator);
    setListenerCount(book.listenerCount);
    setAudioUrl(book.audioUrl);
  }, [book]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tiêu đề sách"
        required
      />
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Thể loại sách"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Tên tác giả"
        required
      />
      <input
        type="text"
        value={narrator}
        onChange={(e) => setNarrator(e.target.value)}
        placeholder="Tên giọng đọc"
        required
      />
      <input
        type="number"
        value={listenerCount}
        onChange={(e) => setListenerCount(e.target.value)}
        placeholder="Số lượt nghe"
        required
      />
      <input
        type="text"
        value={audioUrl}
        onChange={(e) => setAudioUrl(e.target.value)}
        placeholder="Đường dẫn audio"
        required
      />
      <button type="submit">Cập nhật sách</button>
      <button type="button" onClick={onCancel}>
        Hủy
      </button>
    </form>
  );
};

export default EditBook;
