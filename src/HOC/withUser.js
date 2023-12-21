import React from "react";
import UserContext from "../contexts/UserContext";

const withUser = (Component) => (props) => 
<UserContext.Consumer>
    {([user, logOut]) =>
    <Component user={user} logOut={logOut} {...props}/>
    }
</UserContext.Consumer> 

export default withUser