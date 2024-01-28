import {NavLink, useNavigate} from "react-router-dom";
import {Breadcrumbs, Button, Input, Join, Menu} from "react-daisyui";
import {FolderOpenIcon, HomeIcon, MagnifyingGlassIcon, PlusIcon} from "@heroicons/react/24/outline";
import Layout from "../../components/Layout/Layout.tsx";
import Task from "../../components/Tasks/Task";
import QuickGroupList from "../../components/Groups/QuickGroupList.tsx";
import tasks from "../../data/tasks.json"
import {useEffect} from "react";

const Groups = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("isLogged") != "yes")
            navigate("/login");
    }, []);

    return (
        <Layout>
            <div>
                <Breadcrumbs>
                    <Breadcrumbs.Item>
                        <NavLink to={"/"}>
                            <HomeIcon className="w-4 h-4 mr-2 stroke-current" /> Home
                        </NavLink>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <NavLink to={"/tasks"}>
                            <FolderOpenIcon className="w-4 h-4 mr-2 stroke-current" /> Tasks
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8"><h1>Tasks</h1></div>
                <Join className="w-full pb-4">
                    <div className="w-full">
                        <div className="w-full">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <Input id="search" className="join-item w-full" placeholder="Search..."/>
                        </div>
                    </div>
                    <Button className="join-item">
                        <MagnifyingGlassIcon className="w-4 h-4 mr-1 stroke-current" /> Search
                    </Button>
                </Join>
                <div className="grid grid-cols-3 gap-4">
                    {tasks.map((group) => (
                        <Task key={group.id} id={group.id} title={group.longName} isDone={group.done}/>
                    ))}
                </div>
            </div>
            <Menu>
                <QuickGroupList/>
                <NavLink to={"/tasks/add"}>
                    <Button color="accent" fullWidth={true}>
                        <PlusIcon className="w-4 h-4 mr-1 stroke-current" /> Create task
                    </Button>
                </NavLink>
            </Menu>
        </Layout>
    );
};

export default Groups;
