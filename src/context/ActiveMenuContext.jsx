import React, { createContext, useReducer, useEffect } from "react";
import { ActiveMenuReducer } from "../reducer/ActiveMenuReducer";

export const ActiveMenuContext = createContext();
const initialData = { id: "" };
export const ActiveMenuContextProvider = (props) => {
  const [fastPayActiveId, dispatch] = useReducer(
    ActiveMenuReducer,
    initialData,
    () => {
      const localData = sessionStorage.getItem("fastPayActiveId");
      return localData ? JSON.parse(localData) : initialData;
    }
  );

  const addActiveId = (data) => { 
    dispatch({
      type: "Add_Active_ID",
      payload: data,
    });
  };

  const removeAllID = () => {
    dispatch({
      type: "REMOVE_All_ID",
      payload: "",
    });
  };

  useEffect(() => {
    sessionStorage.setItem("fastPayActiveId", JSON.stringify(fastPayActiveId));
  }, [addActiveId, removeAllID]);
  return (
    <ActiveMenuContext.Provider
      value={{
        fastPayActiveId,
        addActiveId,
        removeAllID,
      }}
    >
      {props.children}
    </ActiveMenuContext.Provider>
  );
};

// export default MenuContextProvider;
