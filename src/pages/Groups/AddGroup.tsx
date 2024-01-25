import {NavLink, useNavigate} from 'react-router-dom';
import {Alert, Breadcrumbs, Button, FileInput} from "react-daisyui";
import * as yup from "yup";
import {useFormik} from "formik";
import {
    HomeIcon,
    PlusIcon, UserGroupIcon,
    XCircleIcon
} from "@heroicons/react/24/outline";
import Layout from '../../components/Layout/Layout.tsx';

const AddGroup = () => {
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

    const navigate = useNavigate()
    const error = <XCircleIcon className="w-4 h-4 mr-2 stroke-current"/>

    const formik = useFormik({
        initialValues: {
            shortName: "",
            longName: "",
            description: "",
        },
        onSubmit: () => {
            navigate("/groups")
        },
        validationSchema: schema
    });

    return (
        <Layout className="lg:grid-cols-1">
            <div>
                <Breadcrumbs>
                    <Breadcrumbs.Item>
                        <NavLink to={"/"}>
                            <HomeIcon className="w-4 h-4 mr-2 stroke-current" /> Home
                        </NavLink>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <NavLink to={"/groups"}>
                            <UserGroupIcon className="w-4 h-4 mr-2 stroke-current" /> Groups
                        </NavLink>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <NavLink to={"/groups/add"}>
                            <PlusIcon className="w-4 h-4 mr-2 stroke-current"/> Add
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8"><h1>Add new group</h1></div>
                <form onSubmit={formik.handleSubmit}
                      className="min-w-full items-center justify-center gap-2">

                    <div className="form-control w-full max-w-s">
                        <label className="label">
                            <span className="label-text">Short name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Short Name"
                            name="shortName"
                            value={formik.values.shortName}
                            onChange={formik.handleChange}
                            className={`input input-bordered ${formik.errors.shortName ? "input-error" : ""}`}
                        />
                        {formik.errors.shortName &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.shortName}</span></Alert>}
                    </div>
                    <div className="form-control w-full max-w-s">
                        <label className="label">
                            <span className="label-text">Long name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Long Name"
                            name="longName"
                            value={formik.values.longName}
                            onChange={formik.handleChange}
                            className={`input input-bordered ${formik.errors.longName ? "input-error" : ""}`}
                        />
                        {formik.errors.longName &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.longName}</span></Alert>}
                    </div>

                    <div className="form-control w-full max-w-s">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className={`textarea textarea-bordered h-40 ${formik.errors.description ? "textarea-error" : ""}`}
                        />
                        {formik.errors.description &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.description}</span></Alert>}
                    </div>

                    <div className="form-control w-full max-w-s">
                        <label className="label">
                            <span className="label-text">Files</span>
                        </label>
                        <FileInput bordered={true} size="md" />
                    </div>

                    <Button fullWidth={true} type="submit" color="primary" className="my-8">
                        Add task
                    </Button>
                </form>
            </div>
        </Layout>);
};

export default AddGroup;