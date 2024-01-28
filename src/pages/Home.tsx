import {NavLink, useNavigate} from "react-router-dom";
import {Breadcrumbs, Button, Hero, Timeline} from "react-daisyui";
import {HomeIcon} from "@heroicons/react/24/outline";
import Layout from "../components/Layout/Layout.tsx";
import Group from "../components/Groups/Group";
import CalendarEvent from "../components/Calendars/CalendarEvent.tsx";
import groups from "../data/groups.json"
import events from "../data/events.json"
import {useEffect} from "react";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("isLogged") != "yes")
            navigate("/login");
    }, []);

    return (
        <Layout className="lg:grid-cols-[1fr]">
            <Breadcrumbs>
                <Breadcrumbs.Item>
                    <NavLink to={"/"}>
                        <HomeIcon className="w-4 h-4 mr-2 stroke-current"/> Home
                    </NavLink>
                </Breadcrumbs.Item>
            </Breadcrumbs>

            <Hero>
                <Hero.Content className="text-center">
                    <div className="max-w-full">
                        <h1 className="text-5xl font-bold">Welcome back, user</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                            a id nisi.
                        </p>

                        <NavLink to={"/groups"}>
                            <Button color="primary">Get Started</Button>
                        </NavLink>
                    </div>
                </Hero.Content>
            </Hero>


            <div className="prose mt-4 mb-8"><h2>Today</h2></div>
            <Timeline vertical={true}>
                {events.filter(event => event.day === "January 26").map((event) => (
                    <CalendarEvent name={event.name} eventType={event.eventType} eventId={event.eventId}
                                   time={event.time} done={event.done}/>
                ))}
            </Timeline>

            <div className="prose mt-4 mb-8"><h2>Your groups</h2></div>
            <div className="grid grid-cols-3 gap-4">
                {groups.filter(group => group.joined === true).map((group) => (
                    <Group key={group.id} id={group.id} title={group.longName} isMember={group.joined}
                           isAdmin={group.admin}/>
                ))}
            </div>
        </Layout>
    )
        ;
};

export default Home;