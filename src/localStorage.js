// localStorage saves data in the current browser's local storage as key/value pairs.

/* loadState will look at the browser’s localStorage.
If there is a serialized string of the "state" key, 
it will parse it as JSON. Turning the serialized state into an object */
export const loadState = () => {
  /* Wrapped in a try/catch block in case user privacy mode does not allow using 
  localStorage, which can cause localStorage.getItem to fail and crash the app */
  try {
    /* Gets the value of "state" key from localStorage and sore it in this variable */
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }
    // Turns the JSON string of the value of "state" key into an object
    // If something goes wrong, return undefined so the app won't crash
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    /* The state is serialized into a string by using
    JSON.stringify.
    Will only work if the state is serializable. */
    const serializedState = JSON.stringify(state);
    // Stores the "state" key and the value serializedState
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // ignore write errors.
  }
};
