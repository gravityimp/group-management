import { Divider, Radio, Toggle } from "react-daisyui";

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
                            <span className="text-lg">Everyone</span>
                        </div>
                        <div className="flex flex-row content-center gap-3">
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                            <span className="text-lg">People in my groups</span>
                        </div>

                        <Divider />

                        <h3 className="font-bold text-xl mt-2">Email Notifications</h3>
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
                        <h3 className="font-bold text-xl">Visibility</h3>
                        <div className="flex flex-row content-center">
                            <span className="text-lg mr-3">Everyone</span>
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                        </div>
                        <div className="flex flex-row content-center">
                            <span className="text-lg mr-3">
                                People in my groups
                            </span>
                            <Toggle
                                className="self-center"
                                color="primary"
                                size="sm"
                                defaultChecked
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
