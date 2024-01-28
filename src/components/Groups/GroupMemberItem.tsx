import {FunctionComponent} from "react";
import {Card} from "react-daisyui";

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
                <div aria-label="Avatar photo" className="avatar">
                    <div className="rounded-full w-14 h-14">
                        <img src={avatar} alt={name} />
                    </div>
                </div>
                <Card.Title tag="h3">{name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default GroupMemberItem;