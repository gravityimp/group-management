import {NavLink, useNavigate} from "react-router-dom";
import {Breadcrumbs, Button, Input, Join, Menu} from "react-daisyui";
import {HomeIcon, MagnifyingGlassIcon, PlusIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import Layout from "../../components/Layout/Layout.tsx";
import Group from "../../components/Groups/Group";
import QuickGroupList from "../../components/Groups/QuickGroupList.tsx";
import groups from "../../data/groups.json"
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
                        <NavLink to={"/groups"}>
                            <UserGroupIcon className="w-4 h-4 mr-2 stroke-current" /> Groups
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8"><h1>Groups</h1></div>
                <Join className="w-full pb-4">
                    <div className="w-full">
                        <div className="w-full">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <Input id="search" className="join-item w-full" placeholder="Search..."/>
                        </div>
                    </div>
                    <Button className="join-item">
                        <MagnifyingGlassIcon className="w-4 h-4 mr-1 stroke-current"/> Search
                    </Button>
                </Join>
                <div className="grid grid-cols-3 gap-4">
                    {groups.map((group) => (
                        <Group key={group.id} id={group.id} title={group.longName} isMember={group.joined}
                               isAdmin={group.admin}/>
                    ))}
                </div>
            </div>
            <Menu>
                <QuickGroupList/>
                <NavLink to={"/groups/add"}>
                    <Button color="accent" fullWidth={true}>
                        <PlusIcon className="w-4 h-4 mr-1 stroke-current" /> Create group
                    </Button>
                </NavLink>
            </Menu>
        </Layout>
    );
};

export default Groups;
