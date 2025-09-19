import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Listing} from "./containers/listing/listing.js";
import {ConfigProvider} from "antd";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Listing/>,
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ConfigProvider
          theme={{
              components: {
                  Layout: {
                      headerBg: 'white',
                      siderBg: 'white',
                  },
              },
              token: {
                  // ...
              },
          }}
      >
          <RouterProvider router={router}/>
      </ConfigProvider>
  </StrictMode>,
)
