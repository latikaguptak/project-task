// contexts/MenuContext.js
import { createContext, useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";

const INITIAL_STATE = { 
    menuItems: [],
    menuItemLinks:[]

 };

export const MenuContext = createContext(INITIAL_STATE);

const MenuReducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      return { ...state, menuItems: action.payload, menuItemLinks: action.menuItemLinks };
    default:
      return state;
  }
};

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MenuReducer, INITIAL_STATE);
  const location = useLocation();

  useEffect(() => {
    let newMenu = [];
    let links = []
    switch (location.pathname) {
      case "/":
        newMenu = ["Home Item 1", "Home Item 2", "Home Item 3"];
        links = ["/homeitem1", "/homeitem2", "/homeitem3"]

        break;
      case "/about":
        newMenu = ["About Item 1", "About Item 2"];
        // links = ["/#", "/#"]
        break;
      case "/chats":
        newMenu = ["Chats 1", "Chats 2", "Chats 3"];
        // links = ["/#","/#", "/#"]
        
        break;
      case "/references":
        newMenu = ["References 1", "References 2"];
        // links = ["/#", "/#"]
        break;
      case "/policy":
        newMenu = ["Policy 1", "Policy 2", "Policy 3"];
        // links = ["/policy1","/policy2", "/policy3"]
        break;
      case "/collaborations":
        newMenu = ["Collaborations 1", "Collaborations 2"];
        // links = ["/collaborations1","/collaborations2"]
        break;
      case "/access":
        newMenu = ["Home Item 1", "Home Item 2", "Home Item 3"];
        // links = ["/access1","/access2", "/access3"]
        break;
      case "/tools":
        newMenu = ["Tools 1", "Tools 2"];
        // links = ["/tools1","/tools2"]
        break;
      case "/settings":
        newMenu = ["Settings 1", "Settings 2", "Settings 3"];
        // links = ["/settings1","/settings2", "/settings3"]
        break;
      case "/manufacturing":
        newMenu = [" Manufacturing 1", "manufacturing 2"];
        // links = ["/manufacturing1","/manufacturing2"]
        break;
      default:
        newMenu = ["Default Item"];
        links = ["/#"];
    }
    dispatch({ type: "SET_MENU", payload: newMenu, menuItemLinks: links });
  }, [location]);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
);
};
