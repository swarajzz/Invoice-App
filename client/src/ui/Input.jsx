import { forwardRef } from "react";

const Input = forwardRef(({ type, id, ...rest }, ref) => {
  return <input type={type} id={id} ref={ref} {...rest} />;
});

export default Input;
