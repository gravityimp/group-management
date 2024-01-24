import { Button } from "react-daisyui";

interface CalendarDateButtonProps {
    content: string;
    isDay?: boolean;
    indicator?: number;
}

const CalendarDateButton = (props: CalendarDateButtonProps) => {
    const { content, isDay, indicator } = props;

    if (isDay == undefined) {
        return (
            <Button shape="square" className="relative">
                {content}
                {indicator && (
                    <div className="absolute bg-red-500 -top-1 -right-1 w-4 h-4 rounded-full">
                        <span>{indicator}</span>
                    </div>
                )}
            </Button>
        );
    } else if (isDay) {
        return (
            <Button
                shape="square"
                color="ghost"
                animation={false}
                className="hover:bg-transparent hover:cursor-default"
            >
                {content}
            </Button>
        );
    } else {
        return (
            <Button shape="square" color="primary" animation={false}>
                {content}
            </Button>
        );
    }
};

export default CalendarDateButton;
