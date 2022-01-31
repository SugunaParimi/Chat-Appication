import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatId from "./components/chatId";
import LoginForm from "./components/LoginForm";
const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="069f0d8f-749a-433e-8f5d-1ab0dbb057d6"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatId={(ChatAppProps) => <ChatId {...ChatAppProps} />}
    />
  );
};
export default App;
