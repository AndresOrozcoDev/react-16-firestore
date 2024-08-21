import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';


describe('Modal component', () => {
  it('renders children when isOpen is true', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    const onClose = jest.fn();
    const { queryByText } = render(
      <Modal isOpen={false} onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByTitle } = render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(getByTitle('Close'));

    expect(onClose).toHaveBeenCalled();
  });
});
