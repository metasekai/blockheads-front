import { Routes, Route } from "react-router-dom";

const Main = (props) => {
  return (
    <Routes>
      {props.routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
};
export default Main;
