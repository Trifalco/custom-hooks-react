import { useState } from "react"


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset=()=>{
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {

        //cambio el estado del name a lo que ingrece el usuario
        setValues({
            ...values,//esta linea es para que vengan todos los valores por defecto que tengo en el estado
            [target.name]: target.value//remplazo el valor que ingresan en el input y lo pongo como valor en el state.   
        });
    }

    return [values, handleInputChange,reset];
}
