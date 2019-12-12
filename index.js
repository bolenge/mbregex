/**
 * Librairie contenant des regex de plusieurs cas qu'on peut rencontrer (url,email,numéro telephone,...)
 * @author Don de Dieu Bolenge
 * @version 0.1.0
 * @license ISC
 * @git ---
 */

/**
 * Vérifie si l'url passé en paramètre est valide
 * @param {String} url
 * @return {Boolean}
 */
exports.isUrlValid = (url) =>  {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);

    if (regex.test(url)) {
        return true
    }else {
        return false
    }
}