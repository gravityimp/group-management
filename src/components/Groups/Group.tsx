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
                <Card.Title className="justify-center mb-4">{title}</Card.Title>
                {isMember ? (
                    <Card.Actions className="grid grid-cols-2 gap-2 w-full justify-self-end">
                        <Button fullWidth={true} color="primary">
                            <NavLink to={`/groups/${id}`}>
                                View
                            </NavLink>
                        </Button>
                        {isAdmin ?
                            <Button fullWidth={true} color="neutral">
                                <NavLink to={`/groups/${id}`}>
                                    Manage
                                </NavLink>
                            </Button> :
                            <Button fullWidth={true} color="error">
                                <NavLink to={`/groups/${id}`}>
                                    Leave
                                </NavLink>
                            </Button>}
                    </Card.Actions>
                ) : <Card.Actions className="justify-self-end">
                        <Button fullWidth={true} color="neutral">
                            <NavLink to={`/groups/${id}`}>
                                Join
                            </NavLink>
                        </Button>
                    </Card.Actions>}
            </Card.Body>
        </Card>
    );
};

export default Group;
