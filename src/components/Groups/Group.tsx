import { FunctionComponent } from "react";
import { Card } from "react-daisyui";
import GroupButton from "./GroupButton";

interface GroupProps {
  title: string;
  isAdmin: boolean;
  isMember: boolean;
}

const Group: FunctionComponent<GroupProps> = (props) => {
  const { title, isAdmin, isMember } = props;

  return (
    <Card className="m-4 min-w-[16rem] max-w-[16rem]">
      <Card.Body className="p-4">
        <Card.Title className="justify-center">{title}</Card.Title>
        <Card.Actions className="justify-center">
          {isMember ? (
            <>
              <GroupButton>View</GroupButton>
              {isAdmin ? <GroupButton>Manage</GroupButton> : <GroupButton>Leave</GroupButton>}
            </>
          ) : (
            <GroupButton>Join</GroupButton>
          )}
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default Group;
