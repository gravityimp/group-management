import {NavLink, useNavigate} from 'react-router-dom';
import {Alert, Breadcrumbs, Button, Card} from "react-daisyui";
import * as yup from "yup";
import {useFormik} from "formik";
import {
    FolderOpenIcon,
    HomeIcon,
    PlusIcon,
    XCircleIcon
} from "@heroicons/react/24/outline";
import Layout from '../../components/Layout/Layout.tsx';
import groups from "../../data/groups.json";
import {useEffect} from "react";

const AddTask = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("isLogged") != "yes")
            navigate("/login");
    }, []);

    const schema = yup.object().shape({
        shortName: yup.string()
            .max(32)
            .required(),
        longName: yup.string()
            .max(64)
            .required(),
        description: yup.string()
            .max(1000)
            .required(),
        due: yup.date()
            .required()
    });

    const error = <XCircleIcon className="w-4 h-4 mr-2 stroke-current"/>
    const formik = useFormik({
        initialValues: {
            shortName: "",
            longName: "",
            description: "",
            subjects: "",
            group: 0,
            due: ""
        },
        onSubmit: () => {
            navigate("/tasks")
        },
        validationSchema: schema
    });

    return (
        <Layout className="lg:grid-cols-[1fr]">
            <div>
                <Breadcrumbs>
                    <Breadcrumbs.Item>
                        <NavLink to={"/"}>
                            <HomeIcon className="w-4 h-4 mr-2 stroke-current" /> Home
                        </NavLink>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <NavLink to={"/tasks"}>
                            <FolderOpenIcon className="w-4 h-4 mr-2 stroke-current" /> Tasks
                        </NavLink>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <NavLink to={"/tasks/add"}>
                            <PlusIcon className="w-4 h-4 mr-2 stroke-current"/> Add
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8"><h1>Add new task</h1></div>
                <form onSubmit={formik.handleSubmit}
                      className="min-w-full items-center justify-center gap-2">

                    <div className="form-control w-full max-w-s">
                        <label htmlFor="group" className="label">
                            <span className="label-text">Group</span>
                        </label>
                        <select
                            name="group"
                            id="group"
                            value={formik.values.group}
                            onChange={formik.handleChange}
                            className="select select-bordered"
                        >
                            <option value={"0"} disabled>
                                Pick your group
                            </option>
                            {groups.filter(group => group.joined === true).map((group) => (
                                <option value={group.id}>{group.shortName}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-control w-full max-w-s">
                        <label htmlFor="subjects" className="label">
                            <span className="label-text">Subjects</span>
                        </label>
                        <input
                            type="text"
                            placeholder="List of subjects, separated by comma"
                            name="subjects"
                            id="subjects"
                            value={formik.values.subjects}
                            onChange={formik.handleChange}
                            className={`input input-bordered ${formik.errors.subjects ? "input-error" : ""}`}
                        />
                        {formik.errors.subjects &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.subjects}</span></Alert>}
                    </div>

                    <div className="form-control w-full max-w-s">
                        <label htmlFor="shortName" className="label">
                            <span className="label-text">Short name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Short Name"
                            name="shortName"
                            id="shortName"
                            value={formik.values.shortName}
                            onChange={formik.handleChange}
                            className={`input input-bordered ${formik.errors.shortName ? "input-error" : ""}`}
                        />
                        {formik.errors.shortName &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.shortName}</span></Alert>}
                    </div>
                    <div className="form-control w-full max-w-s">
                        <label htmlFor="longName" className="label">
                            <span className="label-text">Long name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Long Name"
                            name="longName"
                            id="longName"
                            value={formik.values.longName}
                            onChange={formik.handleChange}
                            className={`input input-bordered ${formik.errors.longName ? "input-error" : ""}`}
                        />
                        {formik.errors.longName &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.longName}</span></Alert>}
                    </div>

                    <div className="form-control w-full max-w-s">
                        <label htmlFor="description" className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className={`textarea textarea-bordered h-40 ${formik.errors.description ? "textarea-error" : ""}`}
                        />
                        {formik.errors.description &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.description}</span></Alert>}
                    </div>
                    <div className="form-control w-full max-w-s">
                        <label htmlFor="due" className="label">
                            <span className="label-text">Due</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Due"
                            name="due"
                            id="due"
                            value={formik.values.due}
                            onChange={formik.handleChange}
                            className={`input input-bordered ${formik.errors.due ? "input-error" : ""}`}
                        />
                        {formik.errors.due &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.due}</span></Alert>}
                    </div>

                    <div className="form-control w-full max-w-s">
                        <label htmlFor="files" className="label">
                            <span className="label-text">Files</span>
                        </label>

                        <Card className="border-neutral" id="files">
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

                    <Button fullWidth={true} type="submit" color="primary" className="my-8">
                        Add task
                    </Button>
                </form>
            </div>
        </Layout>);
};

export default AddTask;