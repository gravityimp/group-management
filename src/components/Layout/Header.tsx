import {Badge, Button, Dropdown, Indicator, Menu, Navbar} from "react-daisyui";
import {NavLink} from "react-router-dom";

const Header = () => (
    <Navbar className="navbar bg-base-300">
        <Navbar.Start>
            <Dropdown>
                <Button tag="label" color="ghost" tabIndex={0} className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </Button>
                <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
                    <Dropdown.Item><NavLink to={"/"}>Home</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink to={"/events"}>Events</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink to={"/notes"}>Notes</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink to={"/tasks"}>Tasks</NavLink></Dropdown.Item>
                    <li>
                        <a>Groups</a>
                        <ul className="p-2">
                            <li><NavLink to={"/groups/1"}>Group 1</NavLink></li>
                            <li><NavLink to={"/groups/3"}>Group 3</NavLink></li>
                            <li><NavLink to={"/groups"}>All groups</NavLink></li>
                            <li><NavLink to={"/groups/add"}>Add group</NavLink></li>
                        </ul>
                    </li>
                </Dropdown.Menu>
            </Dropdown>
            <NavLink to={"/"} className="btn btn-ghost text-xl">Study</NavLink>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
            <Menu horizontal className="px-1">
                <Menu.Item><NavLink to={"/events"}>Events</NavLink></Menu.Item>
                <Menu.Item><NavLink to={"/notes"}>Notes</NavLink></Menu.Item>
                <Menu.Item><NavLink to={"/tasks"}>Tasks</NavLink></Menu.Item>
                <Menu.Item>
                    <details>
                        <summary>Groups</summary>
                        <ul className="p-2">
                            <Menu.Item><NavLink to={"/groups/1"}>Group 1</NavLink></Menu.Item>
                            <Menu.Item><NavLink to={"/groups/3"}>Group 3</NavLink></Menu.Item>
                            <Menu.Item><NavLink to={"/groups"}>All groups</NavLink></Menu.Item>
                            <Menu.Item><NavLink to={"/groups/add"}>Add group</NavLink></Menu.Item>
                        </ul>
                    </details>
                </Menu.Item>
            </Menu>
        </Navbar.Center>
        <Navbar.End>
            <Button color="ghost" shape="circle">
                <Indicator>
                    <Badge size="xs" color="primary" className={Indicator.Item.className()} />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </Indicator>
            </Button>
        </Navbar.End>
        <Dropdown end>
            <Button tag="label" tabIndex={0} color="ghost" className="avatar" shape="circle">
                <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </Button>
            <Dropdown.Menu className="mt-3 z-[1] w-52 menu-sm">
                <li>
                    <NavLink to={"/profile"} className="justify-between">
                        Profile
                        <Badge className="badge">New</Badge>
                    </NavLink>
                </li>
                <Dropdown.Item><NavLink to={"/settings"}>Settings</NavLink></Dropdown.Item>
                <Dropdown.Item><NavLink to={"/logout"}>Logout</NavLink></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Navbar>
)

export default Header;