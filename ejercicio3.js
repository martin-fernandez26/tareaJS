// 3)
// 3.1) Dado el siguiente objeto
// let carrito = {
//     montoTotal: 10,
//     productos: ["Leche"]
// }

// Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

// 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
// agregarProducto(nombre, precio, unidades) {
// }
// 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”

class Producto {
  constructor(nombre, precio, unidades) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
  }

  toString() {
    return `${this.nombre} (x${this.unidades}): Precio: $${this.precio}`;
  }
}

class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }

  agregarProducto(nombre, precio, unidades) {
    const productoExistente = this.productos.find(
      (producto) => producto.nombre === nombre
    );
    if (productoExistente) {
      console.log(
        `Ya existe ${productoExistente.nombre} con ${productoExistente.unidades} unidades`
      );
    } else {
      const nuevoProducto = new Producto(nombre, precio, unidades);
      this.productos.push(nuevoProducto);
      this.montoTotal += precio * unidades;
    }
  }

  toString() {
    const productosString = this.productos
      .map((producto) => producto.toString())
      .join("\n  ");
    return `Monto Total: $${this.montoTotal}\nProductos:\n  ${productosString}`;
  }
}

const carrito = new Carrito();
carrito.agregarProducto("Leche", 2, 3);
carrito.agregarProducto("Azucar", 5, 2);
carrito.agregarProducto("Leche", 2, 1);
carrito.agregarProducto("Huevos", 2, 25);
console.log(carrito.toString());
