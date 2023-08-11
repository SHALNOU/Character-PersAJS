
const number = "8 (927) 000-00-00";

function newFunctionNumber(num) {
	const cleanedNumber = num.replace(/\D/g, '');
	return cleanedNumber;
}


export default newFunctionNumber;