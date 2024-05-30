import { useEffect, useRef } from "react";

type FuncAction = () => void;

function useClickOutside(funcAction: FuncAction) {
  const referenceElement = useRef<HTMLDivElement>(null);
  // Este será el elemento al cual queremos detectar si se hace clic afuera.

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        referenceElement.current &&
        !referenceElement.current.contains(event.target as Node)
      ) {
        funcAction();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [funcAction]); // agregar funcAction como dependencia

  return referenceElement;
}

export default useClickOutside;
