import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Auth/Login.tsx";
import Registration from "./pages/Auth/Registration.tsx";
import Logout from "./pages/Auth/Logout.tsx";
import Groups from "./pages/Groups/Groups.tsx";
import GroupSingle from "./pages/Groups/GroupSingle.tsx";
import AddGroup from "./pages/Groups/AddGroup.tsx";
import CalendarPage from "./pages/Calendars/CalendarPage.tsx";
import AddEvent from "./pages/Calendars/AddEvent.tsx";
import Notes from "./pages/Notes/Notes.tsx";
import NoteSingle from "./pages/Notes/NoteSingle.tsx";
import AddNote from "./pages/Notes/AddNote.tsx";
import Tasks from "./pages/Tasks/Tasks.tsx";
import TaskSingle from "./pages/Tasks/TaskSingle.tsx";
import AddTask from "./pages/Tasks/AddTask.tsx";
import Settings from "./pages/Settings/Settings.tsx";
import EditProfile from "./pages/Settings/EditProfile.tsx";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Registration/>
        },
        {
            path: "/logout",
            element: <Logout/>
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
            element: <AddGroup/>
        },
        {
            path: "/events",
            element: <CalendarPage/>
        },
        {
            path: "/events/add",
            element: <AddEvent/>
        },
        {
            path: "/notes",
            element: <Notes/>
        },
        {
            path: "/notes/:id",
            element: <NoteSingle/>
        },
        {
            path: "/notes/add",
            element: <AddNote/>
        },
        {
            path: "/tasks",
            element: <Tasks/>
        },
        {
            path: "/tasks/:id",
            element: <TaskSingle/>
        },
        {
            path: "/tasks/add",
            element: <AddTask/>
        },
        {
            path: "/profile",
            element: <Home/>
        },
        {
            path: "/settings",
            element: <Settings/>
        },
        {
            path: "/settings/profile",
            element: <EditProfile/>
        }
    ])

    return <RouterProvider router={router}/>
};

export default App;
