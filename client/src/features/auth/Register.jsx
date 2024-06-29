import styles from "../styles/Auth.module.scss";
import logo from "../../assets/logo.svg";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { registerUser } from "../../services/apiAuth";

function Register() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit(data) {
    mutate(data);
  }

  const { mutate } = useMutation({
    mutationFn: (data) => {
      return registerUser(data);
    },
    onSuccess: () => {
      toast.success("User registered successfully");
      reset();
      navigate("/auth/login");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return (
    <div className={styles.auth_content}>
      <div className={styles.auth_wrapper}>
        <div className={styles.heading}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div>Create an account</div>
        </div>
        <form className={styles.auth_form} onSubmit={handleSubmit(onSubmit)}>
          <FormRow label={"User Name"} error={errors?.username?.message}>
            <Input
              type="text"
              id="username"
              placeholder="whoami"
              {...register("username", {
                required: "This field is required",
              })}
              icon={"person-outline"}
            />
          </FormRow>
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
          <Button type="submit" name="register">
            Register
          </Button>
          <p className={styles.member}>
            Already have an account?{" "}
            <Link className={styles.signed} to="/auth/login">
              {" "}
              Sign In{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
