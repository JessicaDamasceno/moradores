const moramJuntos = [
	"Arino",
	"Joana",
	"Patrícia",
	"Pietro",
	"Giovana",
	"Jéssica",
	"Enzo",
];
const idadesMoradores = [85, 85, 42, 36, 15, 25, 5];
const nomeEIdadeDosMoradores = [moramJuntos, idadesMoradores];

moramJuntos.splice(moramJuntos.length, 0, "Eduarda", "Amanda");
idadesMoradores.splice(idadesMoradores.length, 0, 22, 20);

const vieramVisitarNome = ["Jurlei", "Faby", "Gabriel"];
const vieramVisitarIdade = [33, 26, 1];
const atualmenteNaCasaNome = moramJuntos.concat(vieramVisitarNome);
const atualmenteNaCasaIdade = idadesMoradores.concat(vieramVisitarIdade);

const nomeEIdadeDeTodosNaCasa = [atualmenteNaCasaNome, atualmenteNaCasaIdade];

const mostraIdadeMoradores = () => {
	for (let i = 0; i < moramJuntos.length; i++) {
		console.log(
			`${nomeEIdadeDosMoradores[0][i]} tem ${nomeEIdadeDosMoradores[1][i]} anos`
		);
	}
};
const mostraNomeeIdadeDeTodos = () => {
	for (let i = 0; i < atualmenteNaCasaNome.length; i++) {
		console.log(
			`${nomeEIdadeDeTodosNaCasa[0][i]} tem ${nomeEIdadeDeTodosNaCasa[1][i]} anos`
		);
	}
};
const exibeIdadeMorador = (nomeMorador) => {
	if (nomeEIdadeDosMoradores[0].includes(nomeMorador)) {
		let i = moramJuntos.indexOf(nomeMorador);
		return ` A idade de ${nomeEIdadeDosMoradores[0][i]} é ${nomeEIdadeDosMoradores[1][i]} anos`;
	} else {
		return "Não mora aqui";
	}
};

//mostraIdadeMoradores();
//mostraNomeeIdadeDeTodos();

console.log(exibeIdadeMorador("Jéssica"));
