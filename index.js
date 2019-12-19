/**
 * Librairie contenant des regex de plusieurs cas qu'on peut rencontrer (url,email,numéro telephone,...)
 * @author Don de Dieu Bolenge
 * @version 0.1.0
 * @license ISC
 * @git https://github.com/bolenge/mbregex.git
 */

/**
 * Vérifie si l'url passé en paramètre est valide
 * @param {String} url L'url à vérifier
 * @param {Boolean} acceptProtocol Si on doit obliger la présence du protocol devant l'url ou pas
 * @return {Boolean}
 */
exports.isUrlValid = (url, acceptProtocol = true) =>  {
    var oldExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var expression = /^((ftp|ftps|http|https):\/\/)?(([a-zA-Z0-9]{1,})([a-zA-Z0-9\-]{1,})?\.)?(([a-zA-Z0-9]{1,})([a-zA-Z0-9\-]{1,})?([a-zA-Z0-9]))+(\.[a-zA-Z0-9]{2,})$/i
    var expressWithProtocol = /^((ftp|ftps|http|https):\/\/)(([a-zA-Z0-9]{1,})([a-zA-Z0-9\-]{1,})?\.)?(([a-zA-Z0-9]{1,})([a-zA-Z0-9\-]{1,})?([a-zA-Z0-9]))+(\.[a-zA-Z0-9]{2,})$/i
    
    var regex = acceptProtocol ? new RegExp(expressWithProtocol) : new RegExp(expression);

    if (regex.test(url)) {
        return true
    }

    return false
}

/**
 * Vérifie si l'adresse passée en paramètre est une adresse email
 * @param {String} adress L'adresse Email à vérifier
 * @return {Boolean}
 */
exports.isEmail = (adress) => {
    var expression = /^([a-zA-Z0-9]{1,})+(_\-)?([a-zA-Z0-9_\-]{1,})([a-zA-Z0-9]@[a-zA-Z0-9])+([a-zA-Z0-9_\-]{1,})(\.[a-zA-Z0-9]{2,})+$/i
    var regex = new RegExp(expression);

    if (regex.test(adress)) {
        return true
    }

    return false
}