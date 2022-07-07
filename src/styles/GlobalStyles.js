import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
	 ${normalize}
	
	 body {
		font: 400 1rem/1.5 'Segoe UI';
	 }
`;

export default GlobalStyle;
