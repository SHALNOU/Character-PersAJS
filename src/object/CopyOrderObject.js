function CopyOrderObject(obj, Array) {
	const probs = [];
	const notProbs = [];

	for (let property in obj) {
		if (Array.includes(property)) {
			probs.push(property);
		} else {
			notProbs.push(property);
		}
	}

	const sortProbs = probs.sort((a, b) => Array.indexOf(a) - Array.indexOf(b));
	const sortProbsAZ = notProbs.sort();

	const sortedPropsArray = sortProbs.map(property => ({ key: property, value: obj[property] }));
	const unsortedPropsArray = sortProbsAZ.map(property => ({ key: property, value: obj[property] }));

	return [...sortedPropsArray, ...unsortedPropsArray];
}


export default CopyOrderObject;