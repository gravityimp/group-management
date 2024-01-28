import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Breadcrumbs, Button, Divider, Menu, Select, Toggle} from "react-daisyui";
import {Cog6ToothIcon, HomeIcon} from "@heroicons/react/24/outline";
import Layout from "../../components/Layout/Layout.tsx";

const Settings = () => {
    const [theme, setTheme] = useState<string>('Dark');
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("isLogged") != "yes")
            navigate("/login");
    }, []);

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
                        <NavLink to={"/settings"}>
                            <Cog6ToothIcon className="w-4 h-4 mr-2 stroke-current"/> Settings
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8"><h1>Settings</h1></div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-full">
                        <div className="prose my-2"><h2 id="appearance">Appearance</h2></div>
                        <Select value={theme} onChange={(event) => setTheme(event.target.value)}>
                            <option value={"Dark"} disabled={theme == "Dark"}>Dark</option>
                            <option value={"Light"} disabled={theme == "Light"}>Light</option>
                        </Select>
                    </div>
                    <div className="prose my-2 col-span-full"><h2 id="notifications">Notifications</h2></div>
                    <div>
                        <div className="prose mb-4">
                            <h3 id="sound">Sound Notifications</h3>
                            <p>You will be notified in-app with sound when:</p>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">All</span>
                        </div>
                        <Divider />
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Changes in groups</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Updated tasks</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Event updates</span>
                        </div>
                    </div>
                    <div>
                        <div className="prose mb-4">
                            <h3 id="email">E-mail Notifications</h3>
                            <p>You will get email when any of the these happens:</p>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">All</span>
                        </div>
                        <Divider/>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Changes in groups</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Updated tasks</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Event updates</span>
                        </div>
                    </div>
                    <div className="prose my-2 col-span-full"><h2 id="account">Account</h2></div>
                    <div>
                        <div className="prose my-2">
                            <h3 id="visibility">Visibility</h3>
                            <p>Choose who can see your status</p>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg mr-3">Everyone</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg mr-3">
                                People in my groups
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="prose my-2"><h3 id="profile">Profile</h3></div>
                        <NavLink to="/settings/profile">
                            <Button color="neutral">
                                Go to edit profile
                            </Button>
                        </NavLink>
                        <Button color="error" className="ml-2">
                            Remove account
                        </Button>
                    </div>
                </div>
            </div>
            <Menu>
                <Menu.Item><a href="#appearance">Appearance</a></Menu.Item>
                <Menu.Item>
                    <a href="#notifications">Notifications</a>
                    <Menu>
                        <Menu.Item><a href="#sound">Sound notifications</a></Menu.Item>
                        <Menu.Item><a href="#email">Email notifications</a></Menu.Item>
                    </Menu>
                </Menu.Item>
                <Menu.Item>
                    <a href="#account">Account</a>
                    <Menu>
                        <Menu.Item><a href="#visibility">Visibility</a></Menu.Item>
                        <Menu.Item><a href="#profile">Profile</a></Menu.Item>
                    </Menu>
                </Menu.Item>
            </Menu>
        </Layout>
    );
};

export default Settings;
