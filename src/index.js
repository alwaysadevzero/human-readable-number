module.exports = function toReadable (number) {
    let units = {
        '0': 'zero', '1': 'one','2': 'two',
        '3': 'three','4': 'four','5': 'five',
        '6': 'six', '7': 'seven', '8': 'eight',
        '9': 'nine','10': 'ten','11': 'eleven',
        '12': 'twelve','13': 'thirteen','14': 'fourteen',
        '15': 'fifteen','16': 'sixteen','17': 'seventeen',
        '18': 'eighteen', '19': 'nineteen'
    }
    let teens = {
        '20': 'twenty','30': 'thirty',
        '40': 'forty','50': 'fifty',
        '60': 'sixty','70': 'seventy',
        '80': 'eighty','90': 'ninety',
    }
    function convert_teens(num) {
        if (num < 20) return units[num]
        let teen = Math.floor(num/10)*10;
        let unit = num % 10;
        return unit ? teens[teen] + ' ' + units[unit] : teens[teen]
     }
    function convert_hundred(num) {
        let first_digit = Math.floor(num/100);
        let teen = num % 100;
        return teen ? units[first_digit] + ' hundred ' + convert_teens(teen) : units[first_digit] + ' hundred'
    }
    function converter(num) {
        if (num < 100) return convert_teens(num)
        if (num < 1000) return convert_hundred(num)
    }
    return converter(number)
}
