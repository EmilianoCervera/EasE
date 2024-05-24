import { useState } from "react";

export const useForm = () =>{
    
    const  [formState, setFormState] = useState({});
    
    const onChageInput = (field, value) => {
       
        setFormState({
            ...formState,
            [field]: value
        });
    }

    return{
        ...formState,
        formState,
        onChageInput,
    }
}