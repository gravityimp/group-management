import {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";
import {Button, Timeline} from "react-daisyui";

interface CalendarEventProps {
    name: string,
    eventType: string,
    eventId: number,
    time: string,
    done: boolean
}

const CalendarEvent: FunctionComponent<CalendarEventProps> = (props) => {
    const {name, eventType, eventId, time, done} = props;
    return <Timeline.Item connect="both" className={"grid-cols-[8rem_auto_1fr]"}>
        <Timeline.Start>{time}</Timeline.Start>
        <Timeline.Middle/>
        <Timeline.End className="my-4 w-full">
            <h3 className="font-bold text-xl">{name}<span className="text-sm ml-4">{time}</span></h3>
            <div className="my-2 flex gap-2">
                {eventType === "tasks" ? (
                        !done ?
                            <NavLink to={`/${eventType}/${eventId}/mark`}>
                                <Button color="accent">
                                    Mark as Done
                                </Button>
                            </NavLink>
                            : <Button animation={false} color="neutral">Done</Button>
                    )
                    : ''}
                <NavLink to={`/${eventType}/${eventId}`}>
                    <Button wide={true} color="primary">
                        View
                    </Button>
                </NavLink>
            </div>
        </Timeline.End>
    </Timeline.Item>
}

export default CalendarEvent;