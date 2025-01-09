// contexts/MenuContext.js
import { createContext, useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";

const INITIAL_STATE = { menuItems: [] };

export const MenuContext = createContext(INITIAL_STATE);

const MenuReducer = (state, action) => {
  switch (action.type) {
    case "SET_MENU":
      return { ...state, menuItems: action.payload };
    default:
      return state;
  }
};

export const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MenuReducer, INITIAL_STATE);
  const location = useLocation();

  useEffect(() => {
    let newMenu = [];
    switch (location.pathname) {
      case "/":
        newMenu = ["Home Item 1", "Home Item 2", "Home Item 3"];
        break;
      case "/about":
        newMenu = ["About Item 1", "About Item 2"];
        break;
      case "/chats":
        newMenu = ["Chats 1", "Chats 2", "Chats 3"];
        break;
      case "/references":
        newMenu = ["References 1", "References 2"];
        break;
      case "/policy":
        newMenu = ["Policy 1", "Policy 2", "Policy 3"];
        break;
      case "/collaborations":
        newMenu = ["Collaborations 1", "Collaborations 2"];
        break;
      case "/access":
        newMenu = ["Home Item 1", "Home Item 2", "Home Item 3"];
        break;
      case "/tools":
        newMenu = ["Tools 1", "Tools 2"];
        break;
      case "/settings":
        newMenu = ["Settings 1", "Settings 2", "Settings 3"];
        break;
      case "/manufacturing":
        newMenu = [" Manufacturing 1", "manufacturing 2"];
        break;
      default:
        newMenu = ["Default Item"];
    }
    dispatch({ type: "SET_MENU", payload: newMenu });
  }, [location]);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
);
};
