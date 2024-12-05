import { render, screen, fireEvent } from '@testing-library/react';
import Notify from './Notify';
import '@testing-library/jest-dom';

// Prueba 1: Verifica si el componente se muestra cuando isOpen es true
test('renders notification when isOpen is true', () => {
    const mockOnClose = jest.fn();
    render(<Notify isOpen={true} message="Test notification" type="info" onClose={mockOnClose} />);
    
    // Verifica que el mensaje está presente
    expect(screen.getByText('Test notification')).toBeInTheDocument();
});

// Prueba 2: Verifica si el componente no se muestra cuando isOpen es false
test('does not render notification when isOpen is false', () => {
    const mockOnClose = jest.fn();
    render(<Notify isOpen={false} message="Test notification" type="info" onClose={mockOnClose} />);
    
    // Verifica que el mensaje no está presente
    expect(screen.queryByText('Test notification')).not.toBeInTheDocument();
});

// Prueba 3: Verifica si onClose se llama después de 3 segundos
test('calls onClose after 3 seconds', () => {
    jest.useFakeTimers(); // Utiliza temporizadores falsos
    const mockOnClose = jest.fn();
    render(<Notify isOpen={true} message="Test notification" type="info" onClose={mockOnClose} />);
    
    // Avanza el tiempo en 3 segundos
    jest.advanceTimersByTime(3000);
    
    // Verifica si se llamó a onClose
    expect(mockOnClose).toHaveBeenCalledTimes(1);
    
    jest.useRealTimers(); // Vuelve a los temporizadores reales
});
