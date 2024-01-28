import { Button } from "react-daisyui";
import {QuestionMarkCircleIcon} from "@heroicons/react/24/outline";

const Help = () => {
    return (
        <Button className="w-16 h-16 fixed right-4 bottom-4 shadow-xl" color="primary" shape="circle">
            <QuestionMarkCircleIcon className="w-12 h-12 m-auto stroke-current" /><span className="sr-only">Help</span>
        </Button>
    );
};

export default Help;
