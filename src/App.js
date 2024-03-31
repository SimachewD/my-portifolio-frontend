
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';

import Login from './admin/components/Login';
import Footer from './client/components/Footer';
import Navbar from './client/components/Navbar';
import About from "./client/pages/About";
import Contact from "./client/pages/Contact";
import Home from "./client/pages/Home";
import Skills from "./client/pages/Skills";
import AdminDashboard from './admin/pages/Admin';
import Projects from './admin/pages/Projects';
import AdminSkills from './admin/pages/Skills';
import AboutMe from './admin/pages/AboutMe';
import Messages from './admin/pages/Messages';
import NavBar from './admin/components/NavBar';
import { useAuthContext } from './admin/hooks/useAuthContext';


function App() {

  const { user } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/my-portifolio-frontend'>
        <Route index element={
              <div className="flex flex-col md:grid md:grid-cols-4 md:gap-4 bg-slate-50 ">
                <div className="sticky shadow-2xl top-0 md:row-span-2 md:col-span-1"><Navbar /></div>
                <div className="md:ml-4 md:col-span-3">
                  <div><Home /></div>
                  <div><About /></div>
                  <div><Skills /></div>
                  <div><Contact /></div>
                </div>
                <div className="col-span-3"><Footer /></div>
            </div>}  />

        <Route path='admin' element = { user ? <NavBar />:null}>
            <Route index element={ user ? <AdminDashboard />:<Login />} />
            <Route path='login' element = { !user ? <Login />:<Navigate to={'../home'} />} /> 
            <Route path='home' element={ user ? <AdminDashboard />:<Login />} />
            <Route path='projects' element={ user ? <Projects />:<Navigate to={'../login'} /> } />
            <Route path='skills' element={ user ? <AdminSkills />:<Navigate to={'../login'} />} />
            <Route path='about' element={ user ? <AboutMe />:<Navigate to={'../login'} />} />
          <Route path='messages' element={ user ? <Messages />:<Navigate to={'../login'} />} />
        </Route>    

      </Route>
    )
  )


  return (
  <RouterProvider router={router} />
  );
}

export default App;
