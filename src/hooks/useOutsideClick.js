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
        console.log(ref.current, event.target);
        handler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  return ref;
};

export default useOutsideClick;
