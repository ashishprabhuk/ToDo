import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavLink from "react-bootstrap/NavLink";

const Login = () => {
    const getData = (e) => {
        console.log(e.target.value);
    };
    return (
        <>
            <div className="container mt-3">
                <section className="d-flex justify-content-center">
                    <div
                        className="left_data mt-3 p-3 col-lg-6"
                    >
                        <h3 className="text-center mb-3" >Sign Up</h3>
                        <Form>
                            <Form.Group controlId="formBasicName" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    onChange = {getData}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    onChange = {getData}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicDate" className="mb-3">
                                <Form.Control
                                    name="date"
                                    type="date"
                                    style={{ color: "#000000" }}
                                    onChange = {getData}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mb-3">
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange = {getData}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                className="col-lg-12"
                                style={{ background: "#000000" }}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                        <p className="mt-3">
                            Already Have an Account{" "}
                            <span>
                                <NavLink to="/login">SignIn</NavLink>
                            </span>{" "}
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Login;
