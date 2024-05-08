export function UncontrolledLogin() {
function handleSubmitForm(event) {
    event.preventDefault()

    /* const username = event.target.elements.namedItem('username').value
    const password = event.target.elements.namedItem('password').value
    const session = event.target.elements.namedItem('session').checked */

    const formData = new FormData(event.target)

    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
        session: formData.get('session') === on ? 'true' : 'false',
    }

    console.log(data)
}

    return (
        <form onSubmit={handleSubmitForm}>
            <p>Uncontrolled Login</p>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="checkbox" name="session" />
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}