import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Breadcrumbs, Button, Divider, Menu, Tabs, Timeline} from "react-daisyui";
import {CalendarIcon, HomeIcon, PlusIcon} from "@heroicons/react/24/outline";
import Layout from "../../components/Layout/Layout.tsx";
import QuickGroupList from "../../components/Groups/QuickGroupList.tsx";
import CalendarDateButton from "../../components/Calendars/CalendarDateButton.tsx";
import CalendarEvent from "../../components/Calendars/CalendarEvent.tsx";
import events from "../../data/events.json"

const CalendarPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("isLogged") != "yes")
            navigate("/login");
    }, []);

    const [today, setToday] = useState<Date>(new Date());
    const [days, setDays] = useState<any[]>([]);

    useEffect(() => {
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const daysAmount = getDaysInMonth(firstDay);
        const startIndex = getDayOfWeek(firstDay);

        let _days: any[] = [];
        for (let i = 1; i < 36; i++) {
            if (i <= startIndex) _days.push(null);
            else if (i > startIndex + daysAmount) _days.push(null);
            else
                _days.push(
                    new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        firstDay.getDate() + i - startIndex - 1
                    )
                );
        }
        setDays(_days);
    }, [today]);

    function handleNextMonth() {
        setToday(getNextMonth(today));
    }

    function handlePreviousMonth() {
        setToday(getPreviousMonth(today));
    }

    return (
        <Layout>
            <div>
                <Breadcrumbs>
                    <Breadcrumbs.Item>
                        <NavLink to={"/"}>
                            <HomeIcon className="w-4 h-4 mr-2 stroke-current"/> Home
                        </NavLink>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <NavLink to={"/tasks"}>
                            <CalendarIcon className="w-4 h-4 mr-2 stroke-current"/> Events
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8"><h1>Events</h1><h2>January 26th</h2></div>
                <Timeline vertical={true}>
                    {events.filter(event => event.day === "January 26").map((event) => (
                        <CalendarEvent name={event.name} eventType={event.eventType} eventId={event.eventId}
                                       time={event.time} done={event.done}/>
                    ))}
                </Timeline>
            </div>
            <div>
                <div className="p-2 px-6">
                    <Tabs variant="bordered" size="md" className="w-full">
                        <Tabs.Tab onClick={handlePreviousMonth}>
                            {getMonthYear(getPreviousMonth(today))}
                        </Tabs.Tab>
                        <Tabs.Tab active={true}>
                            {getMonthYear(today)}
                        </Tabs.Tab>
                        <Tabs.Tab onClick={handleNextMonth}>
                            {getMonthYear(getNextMonth(today))}
                        </Tabs.Tab>
                    </Tabs>
                    <div className="grid grid-cols-7 grid-rows-6 gap-3 mx-auto mt-8">
                        <CalendarDateButton content="M" isDay={false}/>
                        <CalendarDateButton content="T" isDay={false}/>
                        <CalendarDateButton content="W" isDay={false}/>
                        <CalendarDateButton content="T" isDay={false}/>
                        <CalendarDateButton content="F" isDay={false}/>
                        <CalendarDateButton content="S" isDay={false}/>
                        <CalendarDateButton content="S" isDay={false}/>

                        {days.map((day, idx) => {
                            return day == null ? (
                                <CalendarDateButton
                                    key={day + "_" + idx}
                                    content=""
                                    isDay={true}
                                />
                            ) : (
                                <CalendarDateButton
                                    key={day.getDay() + "_" + idx}
                                    content={day.getDate()}
                                />
                            );
                        })}
                    </div>
                    <Divider/>
                </div>
                <Menu>
                    <QuickGroupList/>
                    <NavLink to={"/events/add"}>
                        <Button color="accent" fullWidth={true}>
                            <PlusIcon className="w-4 h-4 mr-1 stroke-current"/> Create event
                        </Button>
                    </NavLink>
                </Menu>
            </div>
        </Layout>
    );
};

export default CalendarPage;

function getDayOfWeek(date: Date): number {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    return days.indexOf(days[date.getDay()]) - 1;
}

function getDaysInMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function getMonthYear(date: Date): string {
    const month = date.toLocaleString("en-Us", {month: "long"});
    return (
        month.charAt(0).toLocaleUpperCase() +
        month.slice(1) +
        " " +
        date.getFullYear()
    );
}

function getNextMonth(date: Date): Date {
    let year = date.getFullYear();
    let month = date.getMonth();

    if (month === 11) {
        year += 1;
        month = 0;
    } else {
        month += 1;
    }

    return new Date(year, month, 1);
}

function getPreviousMonth(date: Date): Date {
    let year = date.getFullYear();
    let month = date.getMonth();

    if (month === 0) {
        year -= 1;
        month = 11;
    } else {
        month -= 1;
    }

    return new Date(year, month, 1);
}
