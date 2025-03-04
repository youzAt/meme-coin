/* eslint-disable react/prop-types */
import {
	cloneElement,
	createContext,
	useContext,
	useState,
} from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";


const ModalContext = createContext(null);

function Modal({ children }) {
	const [openName, setOpenName] = useState("");

	const close = () => setOpenName("");
	const open = setOpenName;

	return (
		<ModalContext.Provider value={{ openName, close, open }}>
			{children}
		</ModalContext.Provider>
	);
}

function Open({ children, opens: opensWindowName }) {
	const { open } = useContext(ModalContext);

	return cloneElement(children, {
		onClick: () => open(opensWindowName),
	});
}


function Window({ children, name }) {
	const { openName, close } = useContext(ModalContext);

	if (name !== openName) return null;

	return createPortal(
		<div className={styles.overlay}>
			<div className={styles.modal}>
				{cloneElement(children, {
					onCloseModal: close,
				})}
			</div>
		</div>,
		document.body
	);
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
