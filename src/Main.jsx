import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = props => {
  return (
    <Routes>
      <Suspense fallback={<div>Loading...</div>}>
        {props.routes.map(route => {
          return <Route key={route.path} path={route.path} element={route.element} />;
        })}
      </Suspense>
    </Routes>
  );
};
export default Main;
