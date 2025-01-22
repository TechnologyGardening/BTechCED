import { useEffect, useState } from "react";
import Promise from "bluebird";
Promise.config({ cancellation: true });
function Fetchuser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "RKU Students" });
    }, 5000);
  });
}
function CancelRequest() {
  const [user, setUser] = useState("loading....");
  const [id, setId] = useState("loading...");
  useEffect(() => {
    const promise = Fetchuser().then((var1) => {
      setUser(var1.name);
      setId(var1.id);
    });
    return () => {
      promise.cancel();
    };
  });
  return (
    <div>
      User ID: {id}
      <br />
      User Name: {user}
    </div>
  );
}
export default CancelRequest;
