import { Badge } from "react-daisyui";

const QuickGroupStyle= `
    p-2
    mx-2
    border
    border-transparent
    hover:border-white
    hover:rounded-md
`;

const QuickGroup = () => {
    return (
        <div className={QuickGroupStyle}>
            <span className="mr-2">Group 1</span>
            <Badge outline={true} color="error">Admin</Badge>
        </div>
    )
}

export default QuickGroup;