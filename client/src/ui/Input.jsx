import { forwardRef } from "react";

const Input = forwardRef(({ ...res }, ref) => {
  console.log(res);
  return <input ref={ref} {...res} />;
});

export default Input;
