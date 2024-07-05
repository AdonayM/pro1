import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AdminHomepage from "./pages/AdminHomepage";
import AdminHomepage1 from "./pages/AdminHomepage1";
import Task from "./pages/Task";
import UserHomepage from "./pages/UserHomepage";
import LogIn from "./pages/LogIn";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/task":
        title = "";
        metaDescription = "";
        break;
      case "/user-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AdminHomepage />} />
      <Route path="/admin-homepage" element={<AdminHomepage1 />} />
      <Route path="/task" element={<Task />} />
      <Route path="/user-homepage" element={<UserHomepage />} />
      <Route path="/log-in" element={<LogIn />} />
    </Routes>
  );
}
export default App;
