import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Badge, Breadcrumbs, Button, Card, Menu} from "react-daisyui";
import {DocumentIcon, FolderOpenIcon, HomeIcon, PlusIcon} from "@heroicons/react/24/outline";
import Layout from "../../components/Layout/Layout.tsx";
import QuickGroupList from "../../components/Groups/QuickGroupList.tsx";
import notes from "../../data/notes.json";

const NoteSingle = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    let numericId: number;
    if (isNaN(Number(id))) {
        navigate("/notes");
        return null;
    } else {
        numericId = Number(id);
    }

    const note = notes[numericId - 1];

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
                        <NavLink to={"/notes"}>
                            <FolderOpenIcon className="w-4 h-4 mr-2 stroke-current"/> Notes
                        </NavLink>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <NavLink to={"/tasks"}>
                            <DocumentIcon className="w-4 h-4 mr-2 stroke-current"/> {note.shortName}
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8 max-w-full">
                    <h1>{note.longName}</h1>
                    {note.subjects.map((subject) => (
                        <Badge color="accent" className="mr-2">{subject}</Badge>
                    ))}
                    <p>{note.description}</p>
                    <h2>Files</h2>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    {note.attachments.map((file) => (
                        <Card key={file.id} className="border-neutral border-s-primary border-2">
                            <Card.Body className="flex-row items-center">
                                <DocumentIcon className="w-8 h-8 mr-2 stroke-current"/>
                                <Card.Title tag="h3">{file.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                    <Card className="border-dashed border-accent border-2">
                        <Card.Body className="flex-columm items-center">
                            <PlusIcon className="w-8 h-8 mr-2 stroke-current"/>
                            <Card.Title tag="h3">Drop your files here</Card.Title>
                            <p>or <span
                                className="text-xs text-sky-700 hover:underline hover:cursor-pointer text-center">
                                Choose files from computer
                            </span></p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Menu>
                <QuickGroupList/>
                <NavLink to={"/notes/add"}>
                    <Button color="accent" fullWidth={true}>
                        <PlusIcon className="w-4 h-4 mr-1 stroke-current"/> Create note
                    </Button>
                </NavLink>
            </Menu>
        </Layout>
    );
};

export default NoteSingle;
