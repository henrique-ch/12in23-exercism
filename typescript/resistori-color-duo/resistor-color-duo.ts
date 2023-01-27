const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]


export function decodedValue(args: Array<string>) {
  let result = ''
  
  if (args.length > 2) {
    args.pop() 
  }
  
  for(const color of args) {
    result += COLORS.indexOf(color)
  }
  return Number(result)
}
