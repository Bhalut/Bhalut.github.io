import Typography from "typography"
import GrandView from "typography-theme-grand-view"

const typography = new Typography(
  {
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    headerFontFamily: [
      "Avenir Next",
      "Helvetica Neue",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
  },
  GrandView
)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
