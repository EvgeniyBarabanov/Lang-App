import React from "react";
import Form from "../Form/Form.jsx"

function Registration(){

    const submitHundler = function(form){
        console.log(form);
        let formData = new FormData(form);
    console.log([...formData]);
    }



    return(
        <div className="registration">
            <div className="container">
                <form onSubmit={(e)=> {
                    e.preventDefault()
                    submitHundler(e.target)}}>
                    
                    <p>
                        <label htmlFor="login">Введите логин</label>
                        <input name="login" placeholder="Login" type="text" id="login"/>
                    </p>
                    <p>
                        <label htmlFor="age">Введите пароль</label>
                        <input name="age" placeholder="age" type="number" id="age"/>
                    </p>
                    <input type="submit" />
                </form>
                
            </div>
        </div>
    )
}

export default Registration

