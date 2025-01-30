import * as React from "react";
export const UserContext = React.createContext();
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 5000);
  });
}
export function UserProvider({ children }) {
  const [user, setUser] = React.useState({
    name: "loading..",
    id: "loading...",
  });
  React.useEffect(() => {
    fetchUser().then((data) => setUser(data));
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
