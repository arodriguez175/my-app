// Loads the state from localStorage
export const loadState = () => {
  try {
    // Gets the state from the browser's local storage
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }
    // If there is a serialized string of the state, returns it as an object
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Saves the state to localStorage
export const saveState = (state) => {
  try {
    /* Takes the state and turns it into a JSON string so it can 
    be saved in localStorage */
    const serializedState = JSON.stringify(state);

    /* Saves that state into localStorage and 
    if an error happens, catch that error and ignore it */
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // ignore write errors.
  }
};
