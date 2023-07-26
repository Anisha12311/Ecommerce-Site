import UserChat from "./UserChat";
import { Outlet } from "react-router-dom";

const RoutewithUserChat = () => {
  return (
    <>
      <UserChat /> <Outlet />
    </>
  );
};

export default RoutewithUserChat
