export default function changeState() {
  return dispatch => {
    dispatch({ type: "changeusername", payload: "Ali" });
  };
}
