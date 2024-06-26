const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g]

function prepareNumber(input: any) {
    let string
    if (typeof input === 'number') {
        string = input.toString()
    } else if (typeof input === 'undefined') {
        string = ''
    } else {
        string = input
    }

    return string
}

function latinToPersian(string: any) {
    let result = string

    for (let index = 0; index < 10; index++) {
        result = result.replace(latinNumbers[index], latinToPersianMap[index])
    }

    return result
}

export function convertNumberToPersian(input: any, sep = true) {
    if (sep) {
        return latinToPersian(
            prepareNumber(
                parseInt(input)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '،'),
            ),
        )
    } else {
        return latinToPersian(prepareNumber(input))
    }
}
