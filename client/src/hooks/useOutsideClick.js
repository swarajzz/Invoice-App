import { useEffect, useRef } from "react";

const useOutsideClick = (handler, filterRef) => {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !filterRef.current.contains(event.target)
      ) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, filterRef]);

  return ref;
};

export default useOutsideClick;
