// Tu vas travailler sur des tableaux json. Chaque élément est un objet qui contient deux attributs.
// Un attribut weigth qui est un entier et un attribut label qui est une chaine de caractères
// ex: [ { "weigth": 21, "label": "goku"}]
// Dans le langage de ton choix, l'objectif est de fournir un moyen pour effectuer les recherches suivantes:
// Voici des liens pour télécharger des jeux de données.
// Tu as des tableaux de différentes tailles (1.000, 50.000, 1.000.000)
// Dans un premier temps on ne s'intéresse qu'aux tableaux non triés.

const data = [
	{
		weight: 73,
		label: 'one',
	},
	{
		weight: 1,
		label: 'ten',
	},
	{
		weight: 6,
		label: 'one',
	},
	{
		weight: 1,
		label: 'twenty',
	},
	{
		weight: 1,
		label: 'forty',
	},
];

// rechercher un élément dans le tableau à partir du label
const searchingFromLabel = (array, labelToFind) =>
	array.filter((element) => element.label === labelToFind);
// console.log(searchingFromLabel(data, 'one'));

// rechercher tous les éléments à partir de l'attribut weight
const searchingFromWeight = (array, weightToFind) =>
	array.filter((element) => element.weight === weightToFind);
// console.log(searchingFromWeight(data, 73));

// rechercher le nième élément à partir de l'attribut weight
const searchingNelementFromWeight = (array, nElement, weight) => {
	const elementSortedByWeight = array.filter(
		(element) => element.weight === weight,
	);
	return elementSortedByWeight[nElement - 1];
};
// console.log(searchingNelementFromWeight(data, 1, 1));

// récupérer le niéme élément
const searchingByIndex = (array, index) => array[index];
// console.log(searchingByIndex(data, 2));

// rechercher le dernier élément à partir de l'attribut weight
const lastElement = (array, w) => {
	const filteredArray = array.filter((element) => element.weight === w);
	return filteredArray[filteredArray.length - 1];
};
