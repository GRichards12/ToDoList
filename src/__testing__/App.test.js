import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { React } from 'react';
import '@testing-library/dom';
//Makes sure that the application always has this specific text
it("should find the text of the header", () => {
  //what file we're testing
  render(<App />);
  //query methods that we're using
  const headerElement = screen.getByText("Add an item to your to do list:");
  //assertions
  expect(headerElement).toBeInTheDocument();
  });