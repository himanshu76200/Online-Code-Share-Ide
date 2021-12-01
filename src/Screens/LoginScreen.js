import { useState } from 'react'

const LoginScreen = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const rawResponse = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ formData })
        });
        const content = await rawResponse.json();
        console.log(content);
    }

    return (
        <>
            <div className="h-screen w-screen grid grid-cols-2">
                <div className="bg-black flex flex-col items-center justify-center px-8">
                    <p className="text-center text-white text-bold text-6xl italic">
                        Code Online
                    </p>
                    <p className="text-center font-semibold text-3xl italic text-gray-400 mt-4">
                        "Online Code Editor for HTML, CSS, and JavaScript code Snippets"
                    </p>
                </div>
                <div className="">
                    <form onSubmit={handleSubmit} className="w-full mt-72">
                        <p className="text-lg text-center my-8">
                            Login or,
                            <span className="text-blue-600 cursor-pointer">
                                Sign up
                            </span>
                        </p>
                        <div className="flex flex-col  items-center justify-center">
                            <input
                                onChange={handleChange}
                                name="email"
                                type="email"
                                className="form-input w-3/5 rounded-md"
                                placeholder="Enter your email"
                                value={formData.email}

                            />
                            <input
                                onChange={handleChange}
                                name="password"
                                type="password"
                                className="form-input w-3/5 mt-8 rounded-md"
                                placeholder="Enter your password"
                                value={formData.password}
                            />
                            <button
                                className="bg-black text-white font-semibold px-4 py-2.5 rounded-md mt-8 hover:bg-gray-700"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                            <p className="text-center font-semibold text-3xl fixed bottom-16">
                                "Share live code and collaboarate with other developers"
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
