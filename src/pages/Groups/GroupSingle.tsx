import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Breadcrumbs, Button, Menu} from "react-daisyui";
import {HomeIcon,  PlusIcon, UserGroupIcon, UserIcon} from "@heroicons/react/24/outline";
import Layout from "../../components/Layout/Layout.tsx";
import QuickGroupList from "../../components/Groups/QuickGroupList.tsx";
import GroupMemberItem from "../../components/Groups/GroupMemberItem.tsx";
import groups from "../../data/groups.json"

const Groups = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    let numericId: number;
    if (isNaN(Number(id))) {
        navigate("/groups");
        return null;
    } else {
        numericId = Number(id);
    }

    const group = groups[numericId - 1];

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
                    <Breadcrumbs.Item>
                        <NavLink to={"/groups"}>
                            <UserIcon className="w-4 h-4 mr-2 stroke-current" /> {group.shortName}
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8 max-w-full">
                    <h1>{group.longName}</h1>
                    <p>{group.description}</p>
                    <h2>Members</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {group.members.map((member) => (
                        <GroupMemberItem key={member.id} id={member.id} name={member.name} avatar={member.avatar}/>
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
