import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import NotFoundPage from './NotFound';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Message from './Message';
import NavBar from './NavBar';
import type { JSX } from 'react/jsx-runtime';

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />} errorElement={<NotFoundPage />} />
        <Route path="/projects" element={<Projects />} errorElement={<NotFoundPage />} />
        <Route path="/skills" element={<Skills />} errorElement={<NotFoundPage />} />
        <Route path="/experience" element={<Experience />} errorElement={<NotFoundPage />} />
      </>
    ),
    {
      basename: '/Alex-Ryan-Portfolio',
    }
  );

  return <RouterProvider router={router} />;
}

function App(){
    return(
        <>  
            <div>
                <NavBar />
                <Message />
            </div>
        </>
    );
};

export default AppRouter;

function createRoutesFromElements(arg0: JSX.Element): import("react-router").RouteObject[] {
  throw new Error('Function not implemented.');
}
