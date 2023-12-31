import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Github, { githubInfoLoader } from './components/Github';
// ist method for routing
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: '',
//         element: <Home />
    
//       },
//       {
//         path: 'about',
//         element: <About/>
    
//       },
//     ]
//   },
  

// ])

// second method for routing
const router=createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<Layout/>}>
  <Route path='' element={<Home/>} />
  <Route path='about' element={<About/>} />
  <Route path='contact' element={<Contact/>} />
  <Route 
  loader={githubInfoLoader}
  path='github' 
  element={<Github/>}
  
  />
</Route>

//Rounser provider works as wrapper and aal the router are wrap under this

))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
