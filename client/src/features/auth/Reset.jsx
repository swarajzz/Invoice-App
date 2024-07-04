import styles from "../styles/Auth.module.scss";
import logo from "../../assets/logo.svg";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { resetUser } from "../../services/apiAuth";
import ShowHidePassword from "../../ui/ShowHidePassword";

function Reset() {
  const { register, formState, handleSubmit, reset, watch } = useForm();

  const navigate = useNavigate();

  const { errors } = formState;

  function onSubmit(data) {
    const { email } = data;
    if (email === "demo@gmail.com") {
      toast.error("You are not authorized to reset the demo password");
      return;
    }
    mutate(data);
  }

  const { mutate } = useMutation({
    mutationFn: (data) => {
      return resetUser(data);
    },
    onSuccess: () => {
      toast.success("Successfully Updated");
      navigate("/auth/login");
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
          <FormRow label={"New Password"} error={errors?.newPassword?.message}>
            <ShowHidePassword
              id="newPassword"
              register={register}
              // placeholder="demo123"
              validationRules={{
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "min length is 5",
                },
              }}
            />
          </FormRow>
          <FormRow
            label={"Confirm Password"}
            error={errors?.confirmPassword?.message}
          >
            <ShowHidePassword
              id="confirmPassword"
              register={register}
              validationRules={{
                required: "This field is required",
                validate: (val) => {
                  if (watch("newPassword") != val) {
                    return "Your passwords do no match";
                  }
                },
              }}
            />
          </FormRow>
          <Button type="submit" name="sendMail">
            Reset Password
          </Button>
          <p className={styles.member}>
            Back to login?{" "}
            <Link className={styles.signed} to="/auth/login">
              {" "}
              Sign in{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Reset;
