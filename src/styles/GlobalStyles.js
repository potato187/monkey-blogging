import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
	 ${normalize}
		*, *::after, *::before {
			box-sizing: border-box;
		}
	 html {
		 font-size: 56.25%;
	 }
	 body {
		font: ${(props) => `400 1.6rem/1.5 ${props.theme.fontFamily}`};
		min-height: 100vh;
		overflow-x: hidden;
	 }

	 @keyframes spin360 {
			100% {
				transform: rotate(1turn);
			}
	 }
`;

export default GlobalStyle;
