import { useForm } from "react-hook-form";
import useApi from "../../shared/useApi";
import { useAuthContext } from "../state/useAuthContext";
import { useNavigate } from "react-router-dom";


const useRegisterHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");
  const api = useApi();
  const authContext = useAuthContext()
  const navigate = useNavigate()

  const onSubmit = async (data) => {

    try {
      const response = await api.post("/auth/register", data);

      console.log("this is response form backend ",response)

      authContext.setAccessToken(response.data.user.accessToken)
      authContext.setUser(response.data.user);

        navigate("/main")

      
    } catch (error) {
      if(error){
        console.log("Backend Error:", error.response?.data);
      }
    }

  };

  return {
    password,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useRegisterHook;
