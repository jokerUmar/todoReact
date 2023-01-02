import { createContext , useState } from "react";

export const NameContext = createContext()

function NameProvider({children}) {
    
    const [arr, setArr] = useState([]);
    const [activePage, setActivePage] = useState(1);


    return <NameContext.Provider value={{arr , setArr ,activePage,setActivePage }}>
        {children}
    </NameContext.Provider>

}

export default NameProvider