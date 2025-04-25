export function substring(str, ini, fin) {
    var nova = ''
    for (var i = ini; i < fin; i++) {
        nova += str[i]
    }
    return nova
}


export function leftTrim(str) {
    var nova = ''
    var conta = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            break
        }
        conta++
    }
    for (var i = conta; i < str.length; i++) {
        nova += str[i]
    }
    return nova
}
export function rightTrim(str) {
    var nova = ''
    var conta = 0
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] != ' ') {
            break
        }
        conta++
    }
    for (var i = 0; i < str.length - conta; i++) {
        nova += str[i]
    }
    return nova
}

export function trim(str) {
    var inicio = 0
    var final = str.length
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            break
        }
        inicio++
    }
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] != ' ') {
            break
        }
        final--
    }



    return substring(str, inicio, final)
}

export function half(input, parte) {
    if (input == undefined) {
        return ''
    }
    if (parte == undefined) {
        parte = 1
    }
    if (typeof input == 'number') {
        var tamanho = Math.floor(input / 2)
        if (parte == 1) {
            return tamanho
        }
        if (parte == 2) {
            return input - tamanho
        }
    }
    if (typeof input == 'string') {
        var tamanho = Math.floor(input.length / 2)
        if (parte == 1) {
            return substring(input, 0, tamanho)
        }
        if (parte == 2) {
            return substring(input, tamanho, input.length)
        }
        if (parte > 2 || parte < 1) {
            return ''
        }

    }

}
export function group(input, partes, retorno) {
    /*     if (typeof input == 'number') {
            var tamanho = Math.floor(input / partes)
            if (retorno != partes) {
                return tamanho
            }
            if (partes == retorno) {
                return input - (tamanho*(partes-1))
            } */

    var tamanho = Math.floor(input.length / partes)
    if (retorno > partes || retorno < 1) {
        return ''
    }
    if (partes != retorno) {
        return substring(input, tamanho * retorno - tamanho, tamanho * retorno)
    }
    if (partes == retorno) {
        return substring(input, tamanho * retorno - tamanho, input.length)
    }

}