import { useState } from "react";

let Username = () => {
    const [user, setUser] = useState({
        name: "",
        age: ""
    });

    return (
        <>
            <input
                type="text"
                value={user.name}
                onChange={(e) => {
                    setUser({
                        ...user,
                        name: e.target.value
                    });
                }}
            />

            <input
                type="number"
                value={user.age}
                onChange={(e) => {
                    setUser({
                        ...user,
                        age: e.target.value
                    });
                }}
            />

            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </>
    );
};

export default Username;