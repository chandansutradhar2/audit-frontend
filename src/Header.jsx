import { Notification } from "./Notification";
import { Search } from "./Search";

export const Header = ({ userName }) => {
  const getGreetings = () => {
    if (userName === "admin") {
      return `Hello Admin`;
    } else {
      return "Hello User";
    }
  };

  return (
    <div>
      <div>{getGreetings()}</div>
      <Search />
      <Notification />
    </div>
  );
};
