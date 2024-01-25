import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Groups from "./pages/Groups/Groups.tsx";
import CalendarPage from "./pages/Calendars/CalendarPage.tsx";
import TasksSingle from "./pages/Tasks/TasksSingle.tsx";
import Settings from "./pages/Settings.tsx";
import GroupSingle from "./pages/Groups/GroupSingle.tsx";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/logout",
            element: <Home/>
        },
        {
            path: "/groups",
            element: <Groups/>
        },
        {
            path: "/groups/:id",
            element: <GroupSingle/>
        },
        {
            path: "/groups/add",
            element: <Home/>
        },
        {
            path: "/events",
            element: <CalendarPage/>
        },
        {
            path: "/notes",
            element: <Home/>
        },
        {
            path: "/tasks",
            element: <Home/>
        },
        {
            path: "/tasks/:id",
            element: <TasksSingle/>
        },
        {
            path: "/profile",
            element: <Home/>
        },
        {
            path: "/settings",
            element: <Settings/>
        }
    ])

    return <RouterProvider router={router}/>
};

export default App;
