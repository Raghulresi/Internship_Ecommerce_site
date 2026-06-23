import "./Login.css";
function Login({setUserName})
{
    const addName = (event)=>
    {
        event.preventDefault();
        let name = event.target.namefetch.value;
        setUserName(name);
        alert(name);
    }
    return(
        <div className="loginhead">
            <div class="form">
                <center><h1>Login</h1></center>
                <form onSubmit={addName}>
                    <div className="formlabel">
                        <div>
                            <label>Name: </label>
                            <input type="text" name="namefetch" />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Password: </label>
                             <input type="text" />
                        </div>
                        <div className="btn">
                            <button type="submit">submit</button>
                            <button type="reset">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;