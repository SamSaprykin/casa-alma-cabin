import { css } from "styled-components"

const fadeIn = css`
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

const raiseIn = css`
  @-webkit-keyframes raiseIn {
    0% {
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes raiseIn {
    0% {
      -webkit-transform: translateY(5px);
      transform: translateY(5px);
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`
export { fadeIn, raiseIn }
