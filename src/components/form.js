import { useState } from "react";
import {signUp} from "../utils";

//remember to google why we use ; again
//prop drilling (setUser)
export const LogForm = ({setUser}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        //console.log(username, email, password);
        signUp(username, email, password);
    }

    return (
        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">Sign-Up</button>
        </form>
      );
};


//     return(
//         <form onSubmit={() => console.log(username, email, password)}>
//             <input onChange={(e) => setusername(e.target.value)}/>
//             <input onChange={(e) => setPassword(e.target.value)}/>
//             <input onChange={(e) => setEmail(e.target.value)}/>
//             <button type="submit">Sign Up</button>
//         </form>
//     )
// }