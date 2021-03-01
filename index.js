// Tu vas travailler sur des tableaux json. Chaque élément est un objet qui contient deux attributs.
// Un attribut weigth qui est un entier et un attribut label qui est une chaine de caractères
// ex: [ { "weigth": 21, "label": "goku"}]
// Dans le langage de ton choix, l'objectif est de fournir un moyen pour effectuer les recherches suivantes:
// Voici des liens pour télécharger des jeux de données.
// Tu as des tableaux de différentes tailles (1.000, 50.000, 1.000.000)
// Dans un premier temps on ne s'intéresse qu'aux tableaux non triés.
// const data1k = require('./1K');
// console.log(data1k);

const fs = require('fs');
const data1k = JSON.parse(fs.readFileSync('./1K.json', 'utf-8'));
const data50k = JSON.parse(fs.readFileSync('./50K.json', 'utf-8'));
const data1m = JSON.parse(fs.readFileSync('./1M.json', 'utf-8'));

// rechercher un élément dans le tableau à partir du label
const searchingFromLabel = (arrayWithObjData, labelToFind) => {
	let index = 0;
	while (index < arrayWithObjData.length) {
		if (arrayWithObjData[index].label === labelToFind) {
			return arrayWithObjData[index];
		}
		index += 1;
	}
};
// console.log(searchingFromLabel(data1k, 'one'));

// rechercher tous les éléments à partir de l'attribut weight a refactorer en brut
const searchingFromWeight = (arrayWithObjData, weightWeLookingFor) => {
	let searchingResult = [];
	for (let i = 0; i < arrayWithObjData.length; i++) {
		if (arrayWithObjData[i].weight === weightWeLookingFor) {
			searchingResult.push(arrayWithObjData[i]);
		}
	}
	return searchingResult;
};
// console.log(searchingFromWeight(data1m, 50));

// rechercher le nième élément à partir de l'attribut weight a refactorer en brut

const searchingNelementFromWeight = (
	arrayWithObjData,
	nElement,
	weightWeLookingFor,
) => {
	matchAnElemnt = 0;
	for (let i = 0; i < arrayWithObjData.length - 1; i++) {
		if (arrayWithObjData[i].weight == weightWeLookingFor) {
			matchAnElemnt++;
			if (matchAnElemnt == nElement) {
				return arrayWithObjData[i];
			}
		}
	}
};
console.log(searchingNelementFromWeight(data1m, 10, 2));

// récupérer le niéme élément a refactorer en brut
const searchingByIndex = (arrayWithObjData, index) => arrayWithObjData[index];
// console.log(searchingByIndex(data1m, 2));

console.time();
// rechercher le dernier élément à partir de l'attribut weight

const lastElement = (arrayWithObjData, weightWeLookingFor) => {
	let lastEl = null;
	for (let i = 0; i < arrayWithObjData.length; i++) {
		if (arrayWithObjData[i].weight === weightWeLookingFor) {
			lastEl = arrayWithObjData[i];
		}
	}
	return lastEl;
};
// console.log(lastElement(data50k, 65));

console.timeEnd();
