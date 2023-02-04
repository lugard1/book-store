import React from 'react';
import AddBook from '../components/Books/AddNewBook';
import BookList from '../components/Books/BookList';
import Card from '../components/UI/Card';

const Home = () => (
  <section>
    <Card>
      <BookList />
      <AddBook />
    </Card>
  </section>
);

export default Home;
