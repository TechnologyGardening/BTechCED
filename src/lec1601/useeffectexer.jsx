import * as React from "react";
function ApiCallSimulation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 2, name: "Outsider" });
    }, 5000);
  });
}
function ArraytoUl() {}
function ApiTesting() {
  const [id, setId] = React.useState("loading...");
  const [name, setName] = React.useState("loading...");
  const [array, setArray] = React.useState({});
  React.useEffect(() => {
    ApiCallSimulation().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  });
  return (
    <div>
      User : {name} <br />
      Id : {id} <br />
    </div>
  );
}
export default ApiTesting;
// create a functional component that will
// aceept array of strings as an argument
// convert array into unordered list
// fetch data function should return
// array of strings
