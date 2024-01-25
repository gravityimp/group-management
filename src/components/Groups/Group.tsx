import {FunctionComponent} from "react";
import {Button, Card} from "react-daisyui";
import {NavLink} from "react-router-dom";

interface GroupProps {
    id: number,
    title: string,
    isAdmin: boolean,
    isMember: boolean
}

const Group: FunctionComponent<GroupProps> = (props) => {
    const {id, title, isAdmin, isMember} = props;

    return (
        <Card>
            <Card.Body className="p-4">
                <Card.Title className="justify-center">{title}</Card.Title>
                {isMember ? (
                    <Card.Actions className="grid grid-cols-2 gap-2 w-full">
                        <Button tag={NavLink} to={`/groups/${id}`} fullWidth={true} color="primary">View</Button>
                        {isAdmin ?
                            <Button tag={NavLink} to={`/groups/${id}`} fullWidth={true}
                                    color="neutral">Manage</Button> :
                            <Button tag={NavLink} to={`/groups/${id}`} fullWidth={true} color="error">Leave</Button>}
                    </Card.Actions>
                ) : <Card.Actions>
                        <Button tag={NavLink} to={`/groups/${id}`} fullWidth={true} color="neutral">Join</Button>
                    </Card.Actions>}
            </Card.Body>
        </Card>
    );
};

export default Group;
