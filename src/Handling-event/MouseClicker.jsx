export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name); //per vedere il nome del botton
    console.log(event.target.src)
  }

  return (
    <button onClick={handleButtonClick} name="click me button">
      <img src="https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" width={100} alt="cat imagine" />
      Click me!
    </button>
  );
}
