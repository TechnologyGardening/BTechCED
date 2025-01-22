import { useState } from "react";
import CancelRequest from "./cancelrequest";
const Setshow = ({ varx }) => (varx ? <CancelRequest /> : null);
function ReqCancel() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide user" : "Show user"}
      </button>
      <Setshow varx={show} />
    </>
  );
}
export default ReqCancel;
