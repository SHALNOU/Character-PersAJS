import newFunctionNumber from "../newFunctionNumber/newFunctionNumber";

test('test return function number format', () => {

	const number = "8 (927) 000-00-00";
	const func = newFunctionNumber(number)

	const result = "89270000000"

	expect(func).toEqual(result)
})