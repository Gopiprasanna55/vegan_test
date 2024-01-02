import { createContext, useState,useContext } from "react";

const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        diameter: 200,
        length: 2000,
        inletqty: 1,
        inletp1:100,
        inletp2:500,
        outletqty: 1,
        outletp1:100,
        outletp2:500,
    });
    const [partname,setPartname]=useState("")
    const [model, setModel] = useState(null);

   
    return <AppContext.Provider value={{
    formData,
    setFormData,
    partname,
    setPartname,setModel
    ,model
  }}>
    {children}
  </AppContext.Provider>
}
export const useGlobalcontext = () => {
  return useContext(AppContext)
}