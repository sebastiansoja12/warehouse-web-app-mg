import {useState} from "react";

const UserForm = ({onSave, user = {} }) => {
    const [userData, setUserData] = useState(user);
    const [errors, setErrors] = useState({});

    const { username, password } = userData;

    const validateData = () => {
        let errors = {};

        if (!username) {
            errors.username = "Username is required";
        }

        if (!password) {
            errors.password = "Password is required";
        }

        return errors;
    };

    const handleChange = (event) => {
        const { username, value } = event.target;
        setUserData((prevData) => ({
            ...prevData, [username]: value }));
    };

    const handleSave = () => {
        const errors = validateData();
        if (Object.keys(errors).length) {
            setErrors(errors);
            return errors;
        }
    }

    setErrors({});

    return (
        <form onSubmit={handleSave}>
            <div>
                <div>
                    <p>Username</p>
                    <input name = "username" value={username} onChange = {handleChange} />
                    <div style={{ color: "red" }}>{errors.username}</div>
                </div>
                <div>
                    <p>Password</p>
                    <input name="password" value={password} onChange = {handleChange} />
                    <div style={{ color: "red" }}>{errors.password}</div>
                </div>
            </div>
        </form>
)
}
