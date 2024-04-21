
import { useState } from "react"
import Input from "./form/input"
import { useOutletContext } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [jwtToken, setJwtToken] = useOutletContext()
    const handleSubmit = (event) => {
        event.preventDefault()
        if(email === "admin@example.com") {
            setJwtToken("abc")
        }
    }
    return(
        <div>
            <h2>Login</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={ (event) => setEmail(event.target.value)}
                    title="Email Address"
                />
                <Input 
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={ (event) => setPassword(event.target.value)}
                    title="Password"
                />
                <hr/>
                <Input 
                    type="submit"
                    className="btn btn-primary"
                    value="login "
                />
            </form>
        </div>
    )
}

export default Login