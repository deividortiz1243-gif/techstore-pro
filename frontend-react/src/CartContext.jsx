import {createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState(() => {
        const guardado = localStorage.getItem("cart-items");
        return guardado ? JSON.parse(guardado) : [];
    });

    function agregarAlCarrito(producto) {
        const nuevo = [...items, producto];
        setItems(nuevo);
        localStorage.setItem("carrito", JSON.stringify(nuevo));
    }

    function eliminarDelCarrito(productoId) {
        const nuevo = items.filter((item) => item.id !== productoId);
        setItems(nuevo);
        localStorage.setItem("carrito", JSON.stringify(nuevo));
    }

    function quitarDelCArrito(indice) {
        const nuevo = items.filter((_, i) => i !== indice);
        setItems(nuevo);
        localStorage.setItem("carrito", JSON.stringify(nuevo));
    }

    function vaciarCarrito() {
        setItems([]);
        localStorage.removeItem("carrito");
    }

    return (
        <CartContext.Provider value={{ items, agregarAlCarrito, quitarDelCArrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
}