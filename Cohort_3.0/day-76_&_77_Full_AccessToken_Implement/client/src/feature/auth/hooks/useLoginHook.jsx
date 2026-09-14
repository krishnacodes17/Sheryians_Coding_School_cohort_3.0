import { useForm } from "react-hook-form";
import useApi from "../../shared/useApi";
import { useNavigate } from "react-router-dom";


const useAuthHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const api = useApi()
  const navigate = useNavigate()


    const onSubmit = async(data) => {
    console.log("Login Data:", data);

    try {
      const reponse = await api.post("/auth/login",data)

      console.log(reponse.data)
      navigate("/main")


    } catch (error) {
        console.log("Backend Error:", error.response?.data);
    }

  };


  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    watch
  };

};


export default useAuthHook