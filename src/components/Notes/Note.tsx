import {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";
import {Button, Card} from "react-daisyui";

interface NoteProps {
    id: number,
    title: string
}

const Note: FunctionComponent<NoteProps> = (props) => {
    const {id, title} = props;

    return (
        <Card>
            <Card.Body className="p-4">
                <Card.Title className="justify-center mb-4">{title}</Card.Title>
                <Card.Actions className="justify-self-end">
                    <NavLink to={`/notes/${id}`} className="w-full">
                        <Button fullWidth={true} color="neutral">
                            View
                        </Button>
                    </NavLink>
                </Card.Actions>
            </Card.Body>
        </Card>
    );
};

export default Note;
