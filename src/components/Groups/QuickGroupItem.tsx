import { Badge, Menu } from "react-daisyui";
import {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

const QuickGroupStyle= `
    flex
`;

interface QuickGroupProps {
    id: number
    title: string;
    isAdmin: boolean;
}

const QuickGroupItem: FunctionComponent<QuickGroupProps> = (props) => {
    const { id, title, isAdmin } = props;
    return (
        <Menu.Item className={QuickGroupStyle}>
            <NavLink to={`/groups/${id}`}>
            <span className="mr-2">{title}</span>
            {isAdmin ? <Badge outline={true} color="error">Admin</Badge> : ''}
            </NavLink>
        </Menu.Item>
    )
}

export default QuickGroupItem;