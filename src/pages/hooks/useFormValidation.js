import { useForm } from "react-hook-form";

const useFormValidation = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return { register, errors, handleSubmit };
};

export { useFormValidation };
