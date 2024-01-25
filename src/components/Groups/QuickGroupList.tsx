import {Divider} from "react-daisyui";
import QuickGroupItem from "../../components/Groups/QuickGroupItem.tsx";
import groups from "../../data/groups.json"

const QuickGroupList = () => {
    return (<>
        {groups.filter(group => group.joined === true).map((group) => (
            <QuickGroupItem key={group.id} id={group.id} title={group.shortName} isAdmin={group.admin} />
            ))}
        <Divider />
        </>
    );
};

export default QuickGroupList;
