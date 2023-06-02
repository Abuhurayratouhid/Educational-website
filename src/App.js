import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className="max-w-[1550px] mx-auto">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
