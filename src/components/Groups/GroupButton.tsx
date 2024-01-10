import { FunctionComponent } from "react"
import { Button } from "react-daisyui"

interface GroupButtonStyle {
    className?: string
    children?: string | JSX.Element | JSX.Element[]
}

const GroupButton: FunctionComponent<GroupButtonStyle> = (props) => {
    const { className, children } = props;

    return (
        <Button className={"w-2/5 " + className || ""}>
            {children}
        </Button>
    )
}

export default GroupButton;