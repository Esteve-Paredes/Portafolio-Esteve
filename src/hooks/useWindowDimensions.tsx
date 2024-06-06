import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  // Verificar si 'window' está disponible
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = () => {
    // Obtener las dimensiones si 'window' está disponible
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  };

  // Estado inicial con las dimensiones de la ventana
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        // Actualizar las dimensiones cuando la ventana cambia de tamaño
        setWindowDimensions(getWindowDimensions());
      };

      // Añadir event listener para el redimensionamiento
      window.addEventListener("resize", handleResize);
      // Limpiar el event listener al desmontar el componente
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};
