const domainFileMime = require("../domain/domain-file-mime");

const useCaseFileMime = async (mime, to, from, url, name, typeMessage) => await domainFileMime(mime, to, from, url, name, typeMessage);

module.exports = useCaseFileMime;