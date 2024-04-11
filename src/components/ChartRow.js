import React, { useState, useEffect } from 'react';
import ChartRow from './ChartRow'; // Importa el componente ChartRow

function ProductsTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Realiza una solicitud a tu API para obtener los datos de productos
        fetch('http://localhost:3020/product/api/products/${product.id}')
            .then(response => response.json())
            .then(data => {
                // Procesa los datos según sea necesario
                const productsData = data.products.map(product => ({
                    Title: product.name,
                    Length: product.description.length, // Ejemplo de procesamiento de datos
                    Rating: product.rating, // Suponiendo que tienes un campo 'rating' en tus datos de producto
                    Categories: product.categories,
                    Awards: product.awards // Suponiendo que tienes un campo 'awards' en tus datos de producto
                }));
                setProducts(productsData);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Length</th>
                    <th>Rating</th>
                    <th>Categories</th>
                    <th>Awards</th>
                </tr>
            </thead>
            <tbody>
                {/* Renderiza una fila de la tabla para cada producto */}
                {products.map((product, index) => (
                    <ChartRow key={index} {...product} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductsTable;