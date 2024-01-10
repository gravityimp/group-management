import { Button, Divider, Input } from "react-daisyui";
import Group from "../../components/Groups/Group";
import QuickGroup from "../../components/Groups/QuickGroup";

const GroupsStyle = `
    lg:grid
    lg:grid-cols-5
    lg:grid-rows-1
    lg:gap-4
`;

const Groups = () => {
  // TODO: Get groups from json

  return (
    <div className={GroupsStyle}>
      <div className="flex flex-col p-2">
        {/* TODO: loop joined groups */}
        <QuickGroup />
        <QuickGroup />
        <QuickGroup />

        <Divider />

        <Button>Create Group</Button>
      </div>
      <div className="w-full col-span-4 p-2 flex flex-col">
        <Input className="w-11/12 self-center"></Input>
        <div className="w-full flex flex-row flex-wrap justify-start">
          <Group title="Group 1" isMember={true} isAdmin={true} />
          <Group title="Group 2" isMember={false} isAdmin={false} />
          <Group title="Group 3" isMember={true} isAdmin={false} />
          <Group title="Group 4" isMember={true} isAdmin={true} />
          <Group title="Group 5" isMember={false} isAdmin={false} />
          <Group title="Group 6" isMember={false} isAdmin={false} />
          <Group title="Group 7" isMember={true} isAdmin={false} />
        </div>
      </div>
    </div>
  );
};

export default Groups;
