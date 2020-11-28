import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({

    name : yup.string().required().min(6),
    age: yup.number().required().integer()
})

function ValidationWithYup() {

    const { register , handleSubmit , errors } = useForm({

            resolver : yupResolver(schema)
    });

    return <> 

        <form onSubmit={handleSubmit( data => console.log(data))}>

            <label htmlFor="name"> userName : </label>
            <input type="text" id="name" name="name" ref={register} />
             <p> {errors.name?.message} </p> <br/>

             <label htmlFor="email"> Email </label>
             <input type="text" name="number" id="age" ref={register}/>
                <p> {errors.age?.message}</p> <br/>

                <input type="submit" value="submit" />
        </form>
    </>

}


export default ValidationWithYup;