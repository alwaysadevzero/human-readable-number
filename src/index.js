module.exports = function toReadable (number) {
  
    function get_unit(num) {

        let number = num.toString(10)

        let units = {
        '0': 'zero', 
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        }
        return units[number]
    }

    function get_teens(num) {

        let number = num.toString(10)

        let teens = {
            '20': 'twenty',
            '30': 'thirty',
            '40': 'forty',
            '50': 'fifty',
            '60': 'sixty',
            '70': 'seventy',
            '80': 'eighty',
            '90': 'ninety',
        }
        return teens[number]
    }

    function get_hundred(num){
        let first_digit = Math.floor(num/100).toString(10);
        return get_unit(first_digit) + ' hundred'
    }

    function converter(num) {
        function convert_teens(num) {

            if (num < 20) {
                return get_unit(num)
            }

            let teens = Math.floor(num/10)*10;
            let unit = num % 10;

            if (unit){
                return get_teens(teens) + ' ' + get_unit(unit)
            }
            return get_teens(teens)
        }
        
        function convert_hundred(num) {
            let hundred = Math.floor(num/100)*100;
            let teens = num % 100;

            if (teens){
                return get_hundred(hundred) + ' ' + convert_teens(teens)
            }
            return get_hundred(hundred)
        }

        if ( num < 20 ){
            return get_unit(num)
        }
        else if (num < 100) {
            return convert_teens(num)
        }
        else if (num < 1000) {
            return convert_hundred(num)
        }

    }

    return converter(number)
}
