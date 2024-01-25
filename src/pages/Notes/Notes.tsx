import {NavLink} from "react-router-dom";
import {Breadcrumbs, Button, Input, Join, Menu} from "react-daisyui";
import {FolderOpenIcon, HomeIcon, MagnifyingGlassIcon, PlusIcon} from "@heroicons/react/24/outline";
import Layout from "../../components/Layout/Layout.tsx";
import QuickGroupList from "../../components/Groups/QuickGroupList.tsx";
import Note from "../../components/Notes/Note.tsx";
import notes from "../../data/notes.json"

const Groups = () => {
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
                        <NavLink to={"/notes"}>
                            <FolderOpenIcon className="w-4 h-4 mr-2 stroke-current" /> Notes
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8"><h1>Notes</h1></div>
                <Join className="w-full pb-4">
                    <div className="w-full">
                        <div className="w-full">
                            <Input className="join-item w-full" placeholder="Search..."/>
                        </div>
                    </div>
                    <Button className="join-item">
                        <MagnifyingGlassIcon className="w-4 h-4 mr-1 stroke-current" /> Search
                    </Button>
                </Join>
                <div className="grid grid-cols-3 gap-4">
                    {notes.map((group) => (
                        <Note key={group.id} id={group.id} title={group.longName} />
                    ))}
                </div>
            </div>
            <Menu>
                <QuickGroupList/>
                <NavLink to={"/notes/add"}>
                    <Button color="accent" fullWidth={true}>
                        <PlusIcon className="w-4 h-4 mr-1 stroke-current" /> Create note
                    </Button>
                </NavLink>
            </Menu>
        </Layout>
    );
};

export default Groups;
