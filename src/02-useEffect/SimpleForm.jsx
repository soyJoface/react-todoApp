import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'Joface',
        email   : 'joface@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) =>{
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ] : value,
        })
    }

    useEffect(() => {
        // console.log('useEffect called')
    }, []);
    useEffect(() => {
        // console.log('formState called')
    }, [formState]);
    useEffect(() => {
        // console.log('email called')
    }, [email]);

    

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            {
                (username === 'Joface2') && <Message />
            }
            
            
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />


        </>
    )
}
