import Form from "../../components/Form/Form"
import './LoginModule.css';

const Login = ({ login })=>(

        <div className="form">
          <Form login={login}/>
        </div>
    );

export default Login;