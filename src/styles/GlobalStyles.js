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
	.modal-enter {
  opacity: 0;
	}
	.modal-enter-active {
		opacity: 1;
		transition: opacity 200ms;
	}
	.modal-exit {
		opacity: 1;
	}
	.modal-exit-active {
		opacity: 0;
		transition: opacity 200ms;
	}

	 @keyframes spin360 {
			100% {
				transform: rotate(1turn);
			}
	 }
`;

export default GlobalStyle;
