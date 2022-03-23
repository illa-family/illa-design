import { css, keyframes } from "@emotion/css"

export const rotateKeyframe = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`

export const rotateAnimation = css`
  animation: 1s linear infinite ${rotateKeyframe};
`
