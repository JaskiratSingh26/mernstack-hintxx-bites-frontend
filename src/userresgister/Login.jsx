import { useState } from 'react';
import style from './LoginScreen.module.css';
import { useEffect } from 'react';
import { Link, Navigate } from "react-router";
import { useNavigate } from "react-router";
import axios from 'axios'
const Login = () => {

    let navigate = useNavigate();


    //for the  states to send the data from client to sevver 
    let [email, setemail] = useState('')
    let [password, setpaass] = useState('')


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        // Function to update screen dimensions on resize
        const updateDimensions = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        // Event listener to handle resize
        window.addEventListener('resize', updateDimensions);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const horizontal = () => {
        const horizontal = screenWidth / 50;

        const elements = [];

        for (let index = 0; index < horizontal; index++) {
            elements.push(<div key={index} className={`boxColor`} style={{ height: '50px', width: '50px', backgroundColor: '#1f1f1f', marginRight: '4px', display: 'inline-block' }}></div>)
        }
        return elements;

    }

    const showBoxes = () => {
        const vertical = screenHeight / 50;

        const elements = [];

        for (let index = 0; index < vertical; index++) {
            elements.push(<div key={index} className={style.boxCover}>
                {horizontal()}
            </div>)
        }
        return elements;
    }


    function resetBoxColor(element) {
        element.style.backgroundColor = "#1f1f1f";
    }


    useEffect(() => {
        // Attach hover event listener to all boxes
        const boxes = document.querySelectorAll(".boxColor");

        boxes.forEach((box) => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "#00f700"; // Change color on hover
            });

            box.addEventListener("mouseout", () => {
                // Revert color back to original after a delay (e.g., 1 second)
                setTimeout(() => {
                    resetBoxColor(box);
                }, 400);
            });
        });
    }, [])


    return (
        <div className={style.fullScreen}>
            {showBoxes()}

            <div className={style.loginContainer}>
                <div className={style.loginContent}>
                    <h1 className={style.welcomeText}>Welcome Back</h1>
                    <form className={style.loginForm}>
                        <input type="email" placeholder="Email" className={style.inputField} value={email} onChange={(e) => {
                            setemail(e.target.value)
                        }} />
                        <input type="password" placeholder="Password" className={style.inputField} value={password}
                            onChange={(e) => {
                                setpaass(e.target.value)
                            }} />
                        <button type="submit" className={style.loginButton}
                            onClick={async (e) => {
                                e.preventDefault()
                                let data = {
                                    email, password
                                }
                                console.log('we are sendd=ing this to backend for login ', data)
                                let sendingdatatobackend = await axios.post('https://mernsstack-hintxx-bites.onrender.com/api/login', data)

                                console.log('res', sendingdatatobackend)
                                let token = sendingdatatobackend.data.token
                                if (sendingdatatobackend.data.message === 'user login') {
                                    console.log(sendingdatatobackend)
                                    localStorage.setItem('user', JSON.stringify(email));
                                    localStorage.setItem('Token', JSON.stringify(token));
                                    navigate('/')
                                    window.location.reload();

                                }
                                else if (sendingdatatobackend.data === 'User does not exits,Create an acoount first') {
                                    window.alert(sendingdatatobackend.data)
                                    navigate('/register')
                                }
                                else {
                                    window.alert(sendingdatatobackend.data)
                                }


                            }}
                        >Login</button>
                    </form>
                </div>
                <span className='text-white m-auto font-mono p-3'> dont have account?  <span className='underline'  >
                    <Link to='/register'>
                        Register
                    </Link>
                </span></span>
            </div>
        </div>


    )
}
export default Login;