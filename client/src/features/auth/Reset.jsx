import styles from "../styles/Auth.module.scss";
import logo from "../../assets/logo.svg";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function Reset() {
  const { register, formState, handleSubmit } = useForm();

  const { errors } = formState;

  function onSubmit() {
    console.log("HEY");
  }

  return (
    <div className={styles.auth_content}>
      <div className={styles.auth_wrapper}>
        <div className={styles.heading}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div>Reset yout Password</div>
        </div>
        <form className={styles.auth_form} onSubmit={handleSubmit(onSubmit)}>
          <FormRow label={"Email"} error={errors?.email?.message}>
            <Input
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              {...register("email", {
                required: "This field is required",
              })}
              icon={"mail-outline"}
            />
          </FormRow>
          <Button type="submit" name="sendMail">
            Send Email
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
