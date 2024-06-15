import styles from "../styles/Auth.module.scss";
import logo from "../../assets/logo.svg";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

function Login() {
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
          <div>Welcome Back</div>
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
          <FormRow label={"Password"} error={errors?.password?.message}>
            <Input
              type="password"
              placeholder=""
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "min length is 5",
                },
              })}
              icon={"lock-closed-outline"}
            />
          </FormRow>
          <Link to="/auth/reset" className={styles.forgot}>
            Forgot password
          </Link>
          <Button type="submit" name="register">
            Login
          </Button>
          <p className={styles.member}>
            Not a member yet? <Link className={styles.signed} to="/auth/register"> Sign up </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
