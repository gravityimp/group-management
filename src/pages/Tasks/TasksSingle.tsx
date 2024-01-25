import { Button, Divider } from "react-daisyui";
import Layout from "../../components/Layout/Layout.tsx";

const TasksStyle = `
    w-11/12
    flex
    flex-col
    justify-center
    mx-auto
    mt-4
    mb-8
`;

const TasksSingle = () => {
    return (
        <Layout className={TasksStyle}>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="font-bold text-4xl">Task 1</h1>
                    <div>
                        <span>Subject 1</span>
                        <span className="mx-3"></span>
                        <span>due tommorow</span>
                    </div>
                </div>
                <Button className="w-32">Done</Button>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="my-4 p-4 border border-gray-100 rounded-md lg:w-1/2 lg:mr-2">
                    <h3 className="font-bold text-2xl">Description</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </p>
                </div>

                <div className="my-4 p-4 border border-gray-100 rounded-md lg:w-1/2 lg:ml-2">
                    <h3 className="font-bold text-2xl">Files</h3>
                    <div className="flex flex-row flex-wrap justify-center content-center">
                        <div className="flex flex-col">
                            <span className="text-xl">
                                Drop your files here
                            </span>
                            <span className="text-xs text-sky-700 hover:underline hover:cursor-pointer text-center">
                                Choose files
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="">
                <h2 className="font-bold text-3xl">Results</h2>
                <span className="text-xl">You have not turned in the task yet!</span>
            </div>
        </Layout>
    );
};

export default TasksSingle;
