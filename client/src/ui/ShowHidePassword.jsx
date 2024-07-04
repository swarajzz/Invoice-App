import { useState } from "react";
import Input from "./Input";

function ShowHidePassword({ id, register, placeholder, validationRules }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Input
      type={!isVisible ? "password" : "text"}
      placeholder={placeholder}
      id={id}
      {...register(id, validationRules)}
      icon={isVisible ? "eye-outline" : "eye-off-outline"}
      clickHandler={() => setIsVisible((prev) => !prev)}
    />
  );
}

export default ShowHidePassword;
