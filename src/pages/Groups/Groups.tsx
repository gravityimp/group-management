import {Button, Divider, Input, Join, Menu} from "react-daisyui";
import Group from "../../components/Groups/Group";
import QuickGroup from "../../components/Groups/QuickGroup";
import Layout from "../../components/Layout/Layout.tsx";
import groups from "../../data/groups.json"
import {NavLink} from "react-router-dom";

const GroupsStyle = `
    lg:grid
    lg:grid-cols-[20rem_1fr]
    lg:gap-4
`;

const Groups = () => {
    return (
        <Layout className={GroupsStyle}>
            <Menu>
                {groups.filter(group => group.member === true).map((group) => (
                    <QuickGroup key={group.id} id={group.id} title={group.shortName} isAdmin={group.admin} />
                ))}
                <Divider />
                <Button tag={NavLink} to={"/groups/add"} color="neutral">Create Group</Button>
            </Menu>
            <div>
                <Join className="w-full pb-4">
                    <div className="w-full">
                        <div className="w-full">
                            <Input className="join-item w-full" placeholder="Search..."/>
                        </div>
                    </div>
                    <Button className="join-item">Search</Button>
                </Join>
                <div className="grid grid-cols-3 gap-4">
                    {groups.map((group) => (
                        <Group key={group.id} id={group.id} title={group.shortName} isMember={group.member}
                               isAdmin={group.admin}/>
                    ))}
                </div>
            </div>
        </Layout>
);
};

export default Groups;
