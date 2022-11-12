import { createContext } from "react";

const drawerContext = createContext({
	visible: false,
	setVisible: (visible: boolean) => {},
});

export default drawerContext;
