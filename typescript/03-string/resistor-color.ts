
export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white" 
]

export const colorCode = (value: string) => {
  return COLORS.indexOf(value)
}
