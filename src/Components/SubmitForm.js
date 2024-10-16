import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const SubmitForm = ()=>{
    const schema = yup.object().shape({
        name: yup.string().required("فیلد نام اجباری است و نمیتواند خالی باشد"),
        email: yup.string().email().required("ایمیل نامعتبر است"),
        age: yup.number().positive().min(18).max(100).required("سن باید بین 18 تا 100 باشد"),
        password: yup.string().min(4).max(15).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d+/),
        confirmPassword: yup.string().oneOf([yup.ref("password")],"Password not matches.").required()
    })

    const {register,handleSubmit,formState:{errors}} = useForm({resolver : yupResolver(schema)})

    const onFormSubmit = (data)=>{
        console.log("the form is submitted");
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input type="text" placeholder="Name..." {...register("name")}/>
            {errors.name && (
                <p>{errors.name?.message}</p>
            )}
            <input type="text" placeholder="Email..." {...register("email")}/>
            {errors.email && (
                <p>{errors.email?.message}</p>
            )}
            <input type="number" placeholder="Age..." {...register("age")}/>
            {errors.age && (
                <p>{errors.age?.message}</p>
            )}
            <input type="password" placeholder="Password..." {...register("password")}/>
            {errors.password && (
                <p>{errors.password?.message}</p>
            )}
            <input type="password" placeholder="Confirm password..." {...register("confirmPassword")}/>
            {errors.confirmPassword && (
                <p>{errors.confirmPassword?.message}</p>
            )}
            <input type="submit" />
        </form>
    )
}

export default SubmitForm;