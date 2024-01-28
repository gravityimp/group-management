import {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";
import {Button, Card} from "react-daisyui";

interface TaskProps {
    id: number,
    title: string,
    isDone: boolean
}

const Task: FunctionComponent<TaskProps> = (props) => {
    const {id, title, isDone} = props;

    return (
        <Card>
            <Card.Body className="p-4">
                <Card.Title className="justify-center mb-4">{title}</Card.Title>
                {!isDone ? (
                    <Card.Actions className="grid grid-cols-2 gap-2 w-full justify-self-end">
                        <NavLink to={`/tasks/${id}`} className="w-full">
                            <Button fullWidth={true} color="neutral">
                                View
                            </Button>
                        </NavLink>
                        <NavLink to={`/tasks/${id}/mark`} className="w-full">
                            <Button fullWidth={true} color="accent">
                                Mark as Done
                            </Button>
                        </NavLink>
                    </Card.Actions>
                ) : <Card.Actions className="justify-self-end">
                    <NavLink to={`/tasks/${id}`} className="w-full">
                        <Button fullWidth={true} color="neutral">
                            View
                        </Button>
                    </NavLink>
                    </Card.Actions>}
            </Card.Body>
        </Card>
    );
};

export default Task;
