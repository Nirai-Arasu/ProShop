import React from 'react';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

import Footer from './components/Footer';

const App = () => {
  return (
    <main className="py-3">
      <Header />
      <Container></Container>
      <Footer />
    </main>
  );
};

export default App;
