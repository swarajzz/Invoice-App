import styles from "../styles/Auth.module.scss";
import logo from "../../assets/logo.svg";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { loginUser } from "../../services/apiAuth";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import ShowHidePassword from "../../ui/ShowHidePassword";

function Login() {
  const { register, formState, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const { errors } = formState;
  function onSubmit(data) {
    mutate(data);
  }

  const dispatch = useDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => {
      return loginUser(data);
    },
    onSuccess: (res) => {
      const accessToken = res.data.data.accessToken;
      const user = res.data.data.user._id;
      toast.success("Successfully Logged In");
      dispatch(setCredentials({ accessToken, user }));
      navigate("/invoices");
      reset();
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
          <div>Welcome Back</div>
        </div>
        <form className={styles.auth_form} onSubmit={handleSubmit(onSubmit)}>
          <FormRow label={"Email"} error={errors?.email?.message}>
            <Input
              type="email"
              id="email"
              placeholder="demo@gmail.com"
              {...register("email", {
                required: "This field is required",
              })}
              icon={"mail-outline"}
            />
          </FormRow>
          <FormRow label={"Password"} error={errors?.password?.message}>
            <ShowHidePassword
              id="password"
              register={register}
              placeholder="demo123"
              validationRules={{
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "min length is 6",
                },
              }}
            />
          </FormRow>
          <Link to="/auth/reset" className={styles.forgot}>
            Forgot password
          </Link>
          <Button type="submit" name="register" isPending={isPending}>
            Login
          </Button>
          <p className={styles.member}>
            Not a member yet?{" "}
            <Link className={styles.signed} to="/auth/register">
              {" "}
              Sign up{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
