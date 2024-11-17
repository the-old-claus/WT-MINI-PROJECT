import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './login.css'


const Login = ({ setUsername, setPassword, setIsLoggedin, setGraduationYear, setEmail, setInstitute}) => {
    const [username, setUsernameCol] = useState('');
    const [password, setPasswordCol] = useState('');
    const [ email, setEmailcol] = useState('')
    const [ graduationYear, setGraduationYearcol] = useState('')
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true); 
    const [institute, setInstituteCol] = useState('')
    const navigate = useNavigate();
    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/signin', { username, password });
            if (response.status === 200) {
                setUsername(username);
                setPassword(password);
                setIsLoggedin(true);
                setGraduationYear(response.data.user.graduationYear);
                setEmail(response.data.user.email);
                alert("Login successful!");
                navigate('/')
            }
        } catch (error) {
            console.error("Error details:", error);
            alert("Something went wrong. Please check the console for details.");
        }
    };
    

    const registerSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3001/save', { username, password , email, graduationYear});
            if (response.status === 200) {
                setUsername(username);
                setPassword(password);
                setGraduationYear(graduationYear);
                setEmail(email);
                setInstitute(institute);
                setIsLoggedin(true);
                alert("Registration successful!");
                navigate('/')
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}  >
            {isLoginFormVisible ? (
                <div style={{ margin: "30px" }}>
                    <form onSubmit={loginSubmit} id="log_form" className = "container">
                        <input
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsernameCol(e.target.value)}
                            maxLength={20}
                            minLength={3}
                            required
                        /><br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPasswordCol(e.target.value)}
                            maxLength={20}
                            minLength={3}
                            required
                            autoComplete="off"
                        /><br />
                        <button type="submit">Login</button>
                        <button type="button" onClick={() => setIsLoginFormVisible(false)}>Register instead</button>
                    </form>
                </div>
            ) : (
                <div style={{ margin: "30px" }}>
                    <form onSubmit={registerSubmit} id="reg_form" className = "container">
                        <input
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsernameCol(e.target.value)}
                            maxLength={20}
                            minLength={3}
                            required
                        /><br />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPasswordCol(e.target.value)}
                            maxLength={20}
                            minLength={3}
                            required
                            autoComplete="off"
                        /><br />
                        <input
                            placeholder="Email"
                            type = 'email'
                            onChange={(e) => setEmailcol(e.target.value)}
                            maxLength={20}
                            minLength={3}
                            required
                            autoComplete="off"
                        /><br />
                        <input
                            placeholder="Institute"
                            onChange={(e) => setInstituteCol(e.target.value)}
                            maxLength={20}
                            minLength={3}
                            required
                        /><br />
                        <input
                            placeholder="Graduation year"
                            type = 'number'
                            onChange={(e) => setGraduationYearcol(e.target.value)}
                            maxLength={4}
                            minLength={4}
                            required
                            autoComplete="off"
                        /><br />
                        <button type="submit">Register</button>
                        <button type="button" onClick={() => setIsLoginFormVisible(true)}>Login instead</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
