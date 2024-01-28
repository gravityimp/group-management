import {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";
import {Button, Card} from "react-daisyui";

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
                <Card.Title className="justify-center mb-4">{title}</Card.Title>
                {isMember ? (
                    <Card.Actions className="grid grid-cols-2 gap-2 w-full justify-self-end">
                        <NavLink to={`/groups/${id}`} className="w-full">
                            <Button fullWidth={true} color="primary">
                                View
                            </Button>
                        </NavLink>
                        {isAdmin ?
                            <NavLink to={`/groups/${id}/manage`} className="w-full">
                                <Button fullWidth={true} color="neutral">
                                    Manage
                                </Button>
                            </NavLink> :
                            <Button fullWidth={true} color="error">
                                Leave
                            </Button>}
                    </Card.Actions>
                ) : <Card.Actions className="justify-self-end">
                    <NavLink to={`/groups/${id}/join`} className="w-full">
                        <Button fullWidth={true} color="neutral">
                            Join
                        </Button>
                    </NavLink>
                    </Card.Actions>}
            </Card.Body>
        </Card>
    );
};

export default Group;
