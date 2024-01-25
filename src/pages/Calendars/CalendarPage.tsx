import { useEffect, useState } from "react";
import CalendarDateButton from "../../components/Calendars/CalendarDateButton.tsx";
import Layout from "../../components/Layout/Layout.tsx";
import events from "../../data/events.json"
import CalendarEvent from "../../components/Calendars/CalendarEvent.tsx";
import {Timeline} from "react-daisyui";

const CalendarPageStyle = `
    w-11/12
    flex
    flex-col
    justify-center
    mx-auto
    mt-4
    mb-8
`;

const CalendarPage = () => {
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
        <Layout className={CalendarPageStyle}>
            <div>
                <h2 className="font-bold text-2xl">January 26</h2>
                <Timeline vertical={true}>
                    {events.filter(event => event.day === "January 26").map((event) => (
                        <CalendarEvent name={event.name} eventType={event.eventType} eventId={event.eventId}
                                       time={event.time} done={event.done}/>
                    ))}
                </Timeline>
            </div>
            <div className="flex flex-row justify-between mt-8">
                <a
                    href="#"
                    className="text-xl hover:underline"
                    onClick={handlePreviousMonth}
                >
                    {getMonthYear(getPreviousMonth(today))}
                </a>
                <a href="#" className="text-3xl underline">
                    {getMonthYear(today)}
                </a>
                <a
                    href="#"
                    className="text-xl hover:underline"
                    onClick={handleNextMonth}
                >
                    {getMonthYear(getNextMonth(today))}
                </a>
            </div>
            <div className="grid grid-cols-7 grid-rows-6 gap-3 w-2/5 mx-auto mt-8">
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
    const month = date.toLocaleString("en-Us", { month: "long" });
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
