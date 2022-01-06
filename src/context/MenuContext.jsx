import React, { createContext, useReducer, useEffect } from "react";
import { MenuReducer } from "../reducer/MenuReducer";

export const MenuContext = createContext();

export const MenuContextProvider = (props) => {
  const [fastPayMenuList, dispatch] = useReducer(MenuReducer, {}, () => {
    const localData = sessionStorage.getItem("fastPayMenuList");
    return localData ? JSON.parse(localData) : {};
  });

  const addList = (data) => {
    dispatch({
      type: "Add_LIST",
      payload: data,
    });
  };

  const removeAll = () => {
    dispatch({
      type: "REMOVE_All",
      payload: "",
    });
  };

  useEffect(() => {
    sessionStorage.setItem("fastPayMenuList", JSON.stringify(fastPayMenuList));
  }, [addList, removeAll]);
  return (
    <MenuContext.Provider
      value={{
        fastPayMenuList,
        addList,
        removeAll,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
