import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = props => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {props.routes.map(route => {
          return <Route key={route.path} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Suspense>
  );
};
export default Main;
