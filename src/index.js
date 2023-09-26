import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import Map from './Pages/Map';
import DestinationPage from './Pages/DestinationPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/whereto",
        element: <DestinationPage />,
    },
    {
        path: "/map",
        element: <Map />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
