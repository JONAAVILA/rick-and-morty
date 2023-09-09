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
        <section>   
            <div className="box_form">
                <div>
                    <form onSubmit={handleSubmit}>
                        <h1>Bienvenidos</h1>
                        <h4>Rick and Morty App</h4>
                    <div className="div_icon" >                     
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-forward" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                            <path d="M3 6l9 6l9 -6"></path>
                            <path d="M15 18h6"></path>
                            <path d="M18 15l3 3l-3 3"></path>
                        </svg>
                        < input
                            className="input"
                            type="text" 
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                        ></input>
                        <label className="input_label">Email</label>
                    </div>
                    <div>
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="div_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-key" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
                        <path d="M15 9h.01"></path>
                        </svg>                      
                        < input
                            className="input"
                            type="text"
                            name="password"
                            value={userData.password}
                            onChange={handleChange}
                            required
                        />
                        <label className="input_label">Password</label>
                    </div>
                    <div>
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div>
                        <button className="button_submit" >Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </section> 
    );
}
export default Form;