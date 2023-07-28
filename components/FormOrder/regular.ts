export const nameReg = new RegExp(
	/ (^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)|(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/
)
export const phoneReg = new RegExp(
	/(^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\+[0-9]{1,3}\([0-9]{1,3}\)[0-9]{1}([-0-9]{0,8})?([0-9]{0,1})?)$)|(^[0-9]{1,4}$)/
)
