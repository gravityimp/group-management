import {Avatar, Card} from "react-daisyui";
import {FunctionComponent} from "react";

interface QuickGroupProps {
    id: number
    name: string;
    avatar: string;
}

const GroupMemberItem: FunctionComponent<QuickGroupProps> = (props) => {
    const { id, name, avatar } = props;
    return (
        <Card key={id} side={true}>
            <Card.Body className="flex-row gap-4">
                <Avatar size="sm" shape="circle" src={avatar} />
                <Card.Title tag="h3">{name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default GroupMemberItem;