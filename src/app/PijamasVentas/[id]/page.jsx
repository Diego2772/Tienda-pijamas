// Importa la lista de productos desde donde sea que esté ubicada
import list from "../../../../public/data";

// Función para obtener un producto por su ID
function getProduct(id) {
  const productId = Number(id); // Asegúrate de convertir el ID a número si es necesario
  return list.find((item) => item.id === productId);
}

// Componente de la página del producto
const ProductPage = ({ params }) => {
  // Obtén el producto usando la función getProduct
  const product = getProduct(params.id);

  // Verifica si el producto no se encontró
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Renderiza la información del producto encontrado
  return (
    <div className="product-detail">
      <img src={product.img} alt={product.title} className="product-image" />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>Categoría: {product.category}</p>
        <p>Cantidad: {product.cantidad}</p>
        <p>Precio: {product.price}</p>
        <p>Descripción: {product.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductPage;