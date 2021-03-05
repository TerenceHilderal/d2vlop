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
	while (
		index < arrayWithObjData.length &&
		arrayWithObjData[index].label !== labelToFind
	) {
		index++;
	}
	if (arrayWithObjData[index] === undefined) {
		return null;
	} else {
		return arrayWithObjData[index];
	}
};
// console.log(searchingFromLabel(data1k, 'tdqfqsfq'));

// rechercher tous les éléments à partir de l'attribut weight a refactorer en brut
const searchingFromWeight = (arrayWithObjData, weightWeLookingFor) => {
	let searchingResult = [];
	for (let i = 0; i < arrayWithObjData.length; i++) {
		if (arrayWithObjData[i].weight === weightWeLookingFor) {
			searchingResult.push(arrayWithObjData[i]);
		} else {
			throw new Error(
				`Sorry,no matching product with this weight ${weightWeLookingFor}`,
			);
		}
	}
	return searchingResult;
};
// console.log(searchingFromWeight(data1m, 3000));

// rechercher le nième élément à partir de l'attribut weight a refactorer en brut

const searchingNelementFromWeight = (
	arrayWithObjData,
	nElement,
	weightWeLookingFor,
) => {
	let matchAnElemnt = 0;
	let index = 0;
	let foundElement;

	if (!nElement || !weightWeLookingFor) {
		return null;
	}

	while (matchAnElemnt !== nElement && index < arrayWithObjData.length) {
		index++;
		if (arrayWithObjData[index].weight === weightWeLookingFor) {
			matchAnElemnt++;
			foundElement = arrayWithObjData[index];
		}
	}
	if (foundElement === undefined || !foundElement) {
		return null;
	} else {
		return foundElement;
	}
};
// console.log(searchingNelementFromWeight(data1m, 3, 25));
// avec 10 donne six avec 3 donne two

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
