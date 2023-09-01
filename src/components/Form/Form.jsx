import { useState } from "react";
import validate from "./validation";
import "./Form.css"

const Form = ({login})=>{
    const [userData, setUserData] = useState({
        email:"",
        password:"",
    });

    const [errors, setErrors] = useState({});

    function handleChange (event) {
        const nameInput = event.target.name;
        setUserData({
            ...userData,
            [nameInput]: event.target.value,
        })
        setErrors(validate({
            ...userData,
            [nameInput]: event.target.value,
        }))
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
    }

    return (
        <>
            <form  onSubmit={handleSubmit}>
                <div className="Form_Conteiner" >
                    <div>
                        <label>Email</label>
                        < input
                            type="text" 
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div>
                        <label>Password</label>
                        < input
                            type="text"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div>
                        <button className="button_submit" >Submit</button>
                    </div>   
                </div>
            </form>
        </>
    );
}
export default Form;