import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Data from './Data';
import '@testing-library/jest-dom/extend-expect';

describe('Data Component', () => {
    const mockData = [
        { id: 2, name: 'Item 2', category: 'Cat 2', location: 'Loc 2', code: 2, status: 'Conocido' },
        { id: 1, name: 'Item 1', category: 'Cat 1', location: 'Loc 1', code: 1, status: 'Desconocido' },
    ];
    
    const mockOnDelete = jest.fn();

    test('renders error message when no data is provided', () => {
        render(<Data data={[]} onDelete={mockOnDelete} />);
        expect(screen.getByText('No se encontró información!')).toBeInTheDocument();
    });

    test('calls onDelete with correct id when delete button is clicked', () => {
        render(<Data data={mockData} onDelete={mockOnDelete} />);
        
        const deleteButtons = screen.getAllByText('X');
        fireEvent.click(deleteButtons[0]); // Click the delete button for the first item in sorted data
    
        // Verificar el ID del primer elemento en el arreglo ordenado
        const sortedData = [...mockData].sort((a, b) => a.code - b.code);
        expect(mockOnDelete).toHaveBeenCalledTimes(1);
        expect(mockOnDelete).toHaveBeenCalledWith(sortedData[0].id); // Asegúrate de usar el ID del primer elemento ordenado
    });
    
});
