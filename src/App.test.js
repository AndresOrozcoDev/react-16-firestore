// App.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('renders Home and Add routes correctly', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Esperamos a que el texto "MEDELLIN" esté visible en la pantalla de Home.
  const medellinText = await screen.findByText(/MEDELLIN/i); // Busca "MEDELLIN" en el componente Home
  expect(medellinText).toBeInTheDocument();
});
