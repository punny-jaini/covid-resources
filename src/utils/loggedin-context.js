import React from "react";

const IsLoggedInContext = React.createContext([false, () => {}]);
export default IsLoggedInContext;