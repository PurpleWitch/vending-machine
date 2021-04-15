// Creates Redux functions that edit the Redux variables to be used by any React connected component
export const add = (x) => { return { type: "add" , add: x } }
export const reset = () => { return { type: "reset" } }
