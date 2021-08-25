//Cualquier anchor desplegará el mensaje
const a = document.querySelectorAll("a");

a.forEach((elemento)=>{
elemento.addEventListener("click",
	()=>{alert(`
		simple responsive layout
		Using flexbox and grid
		day 01 - Pedro Robles
		`)});
});

/*El método getElementByXXX retorna una colección similar a un array
 pero sin las propiedades de este (HTMLCollection), y querySelector retorna un NodeList el cual
 nos permite realizar iteraciones con forEach
*/