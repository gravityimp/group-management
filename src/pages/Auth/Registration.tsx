import {useNavigate} from 'react-router-dom';
import {Alert, Button, Card} from "react-daisyui";
import * as yup from "yup";
import {useFormik} from "formik";
import {XCircleIcon} from "@heroicons/react/24/outline";
import Layout from '../../components/Layout/Layout.tsx';

const Registration = () => {
    const schema = yup.object().shape({
        displayName: yup.string()
            .max(64)
            .required(),
        username: yup.string()
            .max(64)
            .required(),
        email: yup.string()
            .email()
            .min(8)
            .max(320)
            .required(),
        password: yup.string()
            .min(8)
            .max(32)
            .matches(
                /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,32})/,
                "password must contain at least one character, one number and one symbol"
            )
            .required(),
        retypedPassword: yup.string()
            .oneOf(
                [yup.ref('password'), ""],
                "retypedPassword must be the same as password")
            .required()
    });

    const navigate = useNavigate()
    const error = <XCircleIcon className="w-4 h-4 mr-2 stroke-current"/>

    const formik = useFormik({
        initialValues: {
            displayName: "",
            username: "",
            email: "",
            password: "",
            retypedPassword: ""
        },
        onSubmit: () => {
            navigate("/groups")
        },
        validationSchema: schema
    });

    return (
        <Layout className="lg:grid-cols-1">
            <Card side="lg" className="shadow-xl bg-base-200">
                <Card.Body className="lg:basis-4/6 lg:shrink-0">
                    <Card.Title tag="h2">Create new account</Card.Title>
                    <form onSubmit={formik.handleSubmit}
                          className="min-w-full items-center justify-center gap-2">
                        <div className="form-control w-full max-w-s">
                            <label className="label">
                                <span className="label-text">Display name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Display Name"
                                name="displayName"
                                value={formik.values.displayName}
                                onChange={formik.handleChange}
                                className={`input input-bordered ${formik.errors.displayName ? "input-error" : ""}`}
                            />
                            {formik.errors.displayName &&
                                <Alert status="error" icon={error} className="mt-2"><span>{formik.errors.displayName}</span></Alert>}
                        </div>
                        <div className="form-control w-full max-w-s">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                className={`input input-bordered ${formik.errors.username ? "input-error" : ""}`}
                            />
                            {formik.errors.username &&
                                <Alert status="error" icon={error} className="mt-2"><span>{formik.errors.username}</span></Alert>}
                        </div>
                        <div className="form-control w-full max-w-s">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className={`input input-bordered ${formik.errors.email ? "input-error" : ""}`}
                            />
                            {formik.errors.email &&
                                <Alert status="error" icon={error} className="mt-2"><span>{formik.errors.email}</span></Alert>}
                        </div>
                        <div className="form-control w-full max-w-s">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                className={`input input-bordered ${formik.errors.password ? "input-error" : ""}`}
                            />
                            {formik.errors.password &&
                                <Alert status="error" icon={error} className="mt-2"><span>{formik.errors.password}</span></Alert>}
                        </div>
                        <div className="form-control w-full max-w-s">
                            <label className="label">
                                <span className="label-text">Retype password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="retypedPassword"
                                value={formik.values.retypedPassword}
                                onChange={formik.handleChange}
                                className={`input input-bordered ${formik.errors.retypedPassword ? "input-error" : ""}`}
                            />
                            {formik.errors.retypedPassword &&
                                <Alert status="error" icon={error} className="mt-2"><span>{formik.errors.retypedPassword}</span></Alert>}
                        </div>
                        <Button fullWidth={true} type="submit" color="primary" className="my-8">
                            Register
                        </Button>
                    </form>
                </Card.Body>
            </Card>

        </Layout>
    );
};

export default Registration;