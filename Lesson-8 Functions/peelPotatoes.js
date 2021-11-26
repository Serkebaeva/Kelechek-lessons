// 1. Reshenie cherez Zikl
/*let potatoes = 320;
for (let i = potatoes; i>=1; i--) {
	console.log(`Я почистил ${i} картошку`); //можно добавить тег <br> перед закрывающим тегом ` для отделения each String в HTML... 
}*/

// 1. Reshenie cherez Function
let potatoes = 50;
function peelPotatoes(potatoes) {
	if (potatoes>=0) {
		console.log(`Осталось ${potatoes} картошек`) //можно добавить тег <br> перед закрывающим тегом ` для отделения each String в HTML... 
		potatoes--;
		peelPotatoes(potatoes);
	}
}

peelPotatoes(potatoes);