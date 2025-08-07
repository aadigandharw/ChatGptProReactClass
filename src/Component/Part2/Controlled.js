import React, { useState } from 'react';

function Controlled() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello, ${name}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Controlled;
