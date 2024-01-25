
import {NavLink, useNavigate} from 'react-router-dom';
import {Alert, Breadcrumbs, Button} from "react-daisyui";
import * as yup from "yup";
import {useFormik} from "formik";
import {
    CalendarIcon,
    HomeIcon,
    PlusIcon,
    XCircleIcon
} from "@heroicons/react/24/outline";
import Layout from '../../components/Layout/Layout.tsx';
import groups from "../../data/groups.json";

const AddEvent = () => {
    const schema = yup.object().shape({
        shortName: yup.string()
            .max(32)
            .required(),
        type: yup.string()
            .max(16)
            .required(),
        id: yup.number()
            .positive()
            .required(),
        time: yup.string()
            .max(64)
            .required(),
        date: yup.date()
            .required()
    });

    const navigate = useNavigate()
    const error = <XCircleIcon className="w-4 h-4 mr-2 stroke-current"/>

    const formik = useFormik({
        initialValues: {
            name: "",
            type: "",
            id: 0,
            time: "",
            date: "",
            group: 0
        },
        onSubmit: () => {
            navigate("/tasks")
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
                        <NavLink to={"/events"}>
                            <CalendarIcon className="w-4 h-4 mr-2 stroke-current"/> Events
                        </NavLink>
                    </Breadcrumbs.Item>
                    <Breadcrumbs.Item>
                        <NavLink to={"/tasks/add"}>
                            <PlusIcon className="w-4 h-4 mr-2 stroke-current"/> Add
                        </NavLink>
                    </Breadcrumbs.Item>
                </Breadcrumbs>
                <div className="prose mt-4 mb-8"><h1>Create new event</h1></div>
                <form onSubmit={formik.handleSubmit}
                      className="min-w-full items-center justify-center gap-2">

                    <div className="form-control w-full max-w-s">
                        <label className="label">
                            <span className="label-text">Group</span>
                        </label>
                        <select
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
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className={`input input-bordered ${formik.errors.name ? "input-error" : ""}`}
                        />
                        {formik.errors.name &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.name}</span></Alert>}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="form-control w-full max-w-s">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type"
                                name="type"
                                value={formik.values.type}
                                onChange={formik.handleChange}
                                className={`input input-bordered ${formik.errors.type ? "input-error" : ""}`}
                            />
                            {formik.errors.type &&
                                <Alert status="error" icon={error}
                                       className="mt-2"><span>{formik.errors.type}</span></Alert>}
                        </div>
                        <div className="form-control w-full max-w-s">
                            <label className="label">
                                <span className="label-text">Id</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Id"
                                name="id"
                                value={formik.values.id}
                                onChange={formik.handleChange}
                                className={`input input-bordered ${formik.errors.id ? "input-error" : ""}`}
                            />
                            {formik.errors.id &&
                                <Alert status="error" icon={error}
                                       className="mt-2"><span>{formik.errors.id}</span></Alert>}
                        </div>
                    </div>
                    <div className="form-control w-full max-w-s">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <input
                            type="time"
                            placeholder="Time"
                            name="time"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            className={`input input-bordered ${formik.errors.time ? "input-error" : ""}`}
                        />
                        {formik.errors.time &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.time}</span></Alert>}
                    </div>
                    <div className="form-control w-full max-w-s">
                        <label className="label">
                            <span className="label-text">Due</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Date"
                            name="date"
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            className={`input input-bordered ${formik.errors.date ? "input-error" : ""}`}
                        />
                        {formik.errors.date &&
                            <Alert status="error" icon={error}
                                   className="mt-2"><span>{formik.errors.date}</span></Alert>}
                    </div>

                    <Button fullWidth={true} type="submit" color="primary" className="my-8">
                        Add event
                    </Button>
                </form>
            </div>
        </Layout>);
};

export default AddEvent;