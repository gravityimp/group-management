import {useNavigate} from 'react-router-dom';
import {Button, Card} from "react-daisyui";
import {useFormik} from 'formik';
import Layout from '../../components/Layout/Layout.tsx';

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: () => {
            localStorage.setItem("isLogged", "yes")
            navigate("/")
        }
    });

    return (
        <Layout className="lg:grid-cols-1">
            <Card side="lg" className="shadow-xl bg-base-200">
                <Card.Body className="lg:basis-4/6 lg:shrink-0">
                    <Card.Title tag="h2">Login to your account</Card.Title>
                    <form onSubmit={formik.handleSubmit}
                          className="min-w-full items-center justify-center gap-2">
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
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control w-full max-w-s">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                className="input input-bordered"
                            />
                        </div>
                        <Button fullWidth={true} type="submit" color="primary" className="my-8">Login</Button>
                    </form>
                </Card.Body>
            </Card>

        </Layout>
    );
};

export default Login;