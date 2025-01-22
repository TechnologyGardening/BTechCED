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
// import Promise from "bluebird";
// Promise.config({ cancellation: true });
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
// 1. Create carousel (image changer)
// using useeffect. Place 4 images
// in public directory and
// chnage image at interval of 4
// seconds

// 2. Implement count down timer
// using useEffect 5:00 4:59 4:00
// 3:59 3:00
