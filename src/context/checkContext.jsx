import { createContext ,useState} from "react";

export const CheckContext = createContext()

function CheckProvider({children}) {

        const [checked, setChecked] = useState(false);

    return <CheckContext.Provider value={{checked,setChecked}}>
        {children}
    </CheckContext.Provider>

}

export default CheckProvider