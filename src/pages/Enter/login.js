 import $ from 'jquery'
 import { useEffect } from 'react'
 const Login = ()=>{
    const loginSubmit = () => {

    }
    useEffect(() => { $('#reg').click(function() { $('#log_form').fadeOut(1000); }); }, []);
    
    return(
        <span style = {{display: "flex"}}>
        <div style = {{ margin: "30px"}}>
            <form id = 'log_form'>
                <input id = 'log_name' type = 'text' placeholder = "username" /><br/>
                <input type = 'password'  placeholder = "password" /><br/>
                <button onClick={loginSubmit}>Submit</button>
                <button id = 'reg' type = 'button'>Register instead</button>
            </form>
        </div>
        <div style = {{ margin: "30px"}}>
        <form id = 'reg_form'>
            <input type = 'text' placeholder = "username" /><br/>
            <input type = 'password'  placeholder = "password" /><br/>
            <button onClick={loginSubmit}>Submit</button>
            <button id = 'log' type = 'button'>Login instead</button>
        </form>
        </div>
        </span>
    )

 }

 export default Login;