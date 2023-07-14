import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/elements/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  // aos animation activation
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Provider store={store}>
      <div className="h-100">
        <AllRoutes />
        <ScrollToTop />
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
