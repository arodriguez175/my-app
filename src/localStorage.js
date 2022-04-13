/* loadState will look at the browser’s localStorage. 
If there is a serialized string of the state, 
it will parse it as JSON. */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
    /*
    shortenedUrls: [{...}] */

    /*
    shortener: {
      shortenedUrls: [{...}]
    }
    */
  }
};

export const saveState = (state) => {
  try {
    /* The state is serialized into a string by using
    JSON.stringify.
    Will only work if the state is serializable. */
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // ignore write errors.
  }
};
