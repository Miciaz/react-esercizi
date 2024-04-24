import { useState } from "react"

export function Login({onLogin}) {
    function createData() {
        return {
            username: '',
            password: '',
            session: false
        }
    }

    const [data, setData] = useState(createData())

    function handleInputChange(event) {
        const value = event.target.value
        const name = event.target.name
        const checked = event.target.checked
        const type = event.target.type

        setData(data => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleReset() {
        setData(createData())
    }

    function handleLogin(event) {
        event.preventDefault()
        console.log(data)

        onLogin(data)
    }

    return (
        <form onSubmit={handleLogin}>
            <input name="username" type="text" value={data.username} onChange={handleInputChange} />
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
            <button disabled={!data.username || !data.password}>Login</button>
            <button onClick={handleReset}>Reset</button>
        </form>
    )
}