import { addPlace, getPlaces, deletePlace } from './Places';
import { db } from '../firebase-config'; // Si tienes una configuración separada para Firebase
import { addDoc, getDocs, deleteDoc, collection, doc } from 'firebase/firestore';

// Mock de las funciones de Firebase Firestore
jest.mock('firebase/firestore', () => ({
  addDoc: jest.fn(),
  getDocs: jest.fn(),
  deleteDoc: jest.fn(),
  doc: jest.fn(),
  collection: jest.fn(),
}));

describe('Testing Firestore services', () => {
  beforeEach(() => {
    // Limpiar los mocks antes de cada test
    jest.clearAllMocks();
  });

  test('addPlace should call addDoc with correct arguments and return id', async () => {
    // Datos de entrada para el lugar
    const placeData = { 
        name: 'tarea1',
        category: 'restaurante',
        location: 'Medellin',
        code: '1',
        status: 'Nuevo' 
    };
    const fakeDocRef = { id: '123' };

    // Mock para addDoc, devolviendo un "fake" docRef
    addDoc.mockResolvedValueOnce(fakeDocRef);

    // Llamada al servicio
    const result = await addPlace(placeData);

    // Verificar que addDoc fue llamado con los argumentos correctos
    expect(addDoc).toHaveBeenCalledWith(collection(db, 'places'), placeData);
    
    // Verificar que el id correcto se retornó
    expect(result).toBe('123');
  });

  test('getPlaces should return a list of places', async () => {
    // Datos simulados que se devolverían de Firestore
    const fakeDocs = [
      { id: '1', data: () => ({ 
        name: 'tarea1',
        category: 'restaurante',
        location: 'Medellin',
        code: '1',
        status: 'Nuevo' 
        }
    ) },
      { id: '2', data: () => ({ 
        name: 'tarea2',
        category: 'hotel',
        location: 'Miami',
        code: '3',
        status: 'Nuevo'
       }) }
    ];

    // Mock para getDocs, devolviendo una "snapshot" falsa
    getDocs.mockResolvedValueOnce({
      docs: fakeDocs,
    });

    // Llamada al servicio
    const result = await getPlaces();

    // Verificar que getDocs fue llamado con los argumentos correctos
    expect(getDocs).toHaveBeenCalledWith(collection(db, 'places'));
    
    // Verificar que el resultado sea correcto
    expect(result).toEqual([
      { id: '1', 
        name: 'tarea1',
        category: 'restaurante',
        location: 'Medellin',
        code: '1',
        status: 'Nuevo' },
      { id: '2', 
        name: 'tarea2',
        category: 'hotel',
        location: 'Miami',
        code: '3',
        status: 'Nuevo' },
    ]);
  });

  test('deletePlace should call deleteDoc with correct arguments', async () => {
    const placeId = '123';

    // Mock para deleteDoc
    deleteDoc.mockResolvedValueOnce(undefined);

    // Llamada al servicio
    await deletePlace(placeId);

    // Verificar que deleteDoc fue llamado con los argumentos correctos
    expect(deleteDoc).toHaveBeenCalledWith(doc(db, 'places', placeId));
  });

});
