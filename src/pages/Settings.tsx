import { useState } from "react";
import { Divider, Select, Toggle } from "react-daisyui";

const SettingsStyle = `
    w-11/12
    flex
    flex-col
    justify-center
    mx-auto
    mt-4
    mb-8
`;

const Settings = () => {

    const [theme, setTheme] = useState<string>('Dark');

    return (
        <div className={SettingsStyle}>
            <h1 className="font-bold text-3xl">Settings</h1>
            <Divider />
            <div className="flex flex-row gap-4 justify-between">
                <div className="w-1/2 py-2 px-4 border rounded-md">
                    <h2 className="font-bold text-2xl">General</h2>

                    <div className="mt-4">
                        <h3 className="font-bold text-xl mt-2">
                            Sound Notifications
                        </h3>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Groups</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Tasks</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Events</span>
                        </div>

                        <Divider />

                        <h3 className="font-bold text-xl mt-2">
                            Email Notifications
                        </h3>
                        <span className="text-sm">
                            You will get email when any of the selected happens
                        </span>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Groups</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Tasks</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">Events</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 py-2 px-4 border rounded-md">
                    <h2 className="font-bold text-2xl">Account</h2>

                    <div className="mt-4">
                        <h3 className="font-bold text-xl">Theme</h3>
                        <Select value={theme} onChange={(event) => setTheme(event.target.value)}>
                            <option value={"Dark"} disabled={theme == "Dark"}>Dark</option>
                            <option value={"Light"} disabled={theme == "Light"}>Light</option>
                        </Select>
                    </div>

                    <Divider />

                    <div className="mt-4">
                        <h3 className="font-bold text-xl">Visibility</h3>
                        <span className="text-sm">
                            Choose who can see your status
                        </span>
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
                </div>
            </div>
        </div>
    );
};

export default Settings;
