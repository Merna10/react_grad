import { createBrowserRouter } from "react-router-dom";
import  ImageGallery  from "./pages/services/ImagrFetcher";
import  ImageUploadForm  from "./pages/services/ImageUpload";
import { App } from "./App";
// Route is (url displayed in browser + which component to display)

// Here we have 1 Route (that contains nested routes)
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // App component children routes
    children: [
      {
        path: "/",
        element: <ImageGallery />,
      },
      {
        path: "/upload",
        element: <ImageUploadForm />,
      },
      
    
      
    ],
  },
]);


