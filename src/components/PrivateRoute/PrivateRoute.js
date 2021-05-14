// import React, { useContext } from "react";
// import { Route, Redirect } from "react-router-dom"
// import { AuthContext } from "./AuthContext";
//
// function PrivateRoute({children, ...rest}) {
//     const { login } = useContext(AuthContext)
//
//     return (
//         <Route {...rest}>
//             {!login ? children : <Redirect to="/login"/>}
//         </Route>
//     );
// }
//
// export default PrivateRoute;