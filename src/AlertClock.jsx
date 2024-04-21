export function AlertClock() {
    function handleShowTime() {
        const now = new Date()

        alert(`The current time is ${now.toLocaleTimeString()}` )
    }
    return <button onClick={handleShowTime}>Click me!</button>
}