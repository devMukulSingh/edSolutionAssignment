import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from "react-router";
import PublicPage from "./pages/PublicPage.tsx";
import ProtectedPage from "./pages/ProtectedPage.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";
import { useAuth, useClerk } from "@clerk/clerk-react";

function App() {
  const auth = useAuth()
  const clerk = useClerk()
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<HomeLayout />}>
          <Route element={<PublicPage />} path="/">
            <Route
              element={<ProtectedPage />}
              path="/protected"
              loader = { async({}) => {
                if(!auth.userId){
                   clerk.openSignIn();
                   return redirect('/')
                }
                return null; 
              }}
            />
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
