import { useState } from "react";
import { signUp } from "../utils";

//prop drilling (setUser) - taking a state value or variable that's 
// much higher up in the tree and driling it down.
export const LogForm = ({ setUser }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        //console.log(username, email, password);
        //passing in state values in same order
        signUp(username, email, password, setUser);
    };

    return (
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Sign-Up</button>
        </form>
      );
};