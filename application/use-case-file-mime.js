const domainFileMime = require("../domain/domain-file-mime");

const useCaseFileMime = async (mime, to, from, url, nome) => await domainFileMime(mime, to, from, url, nome);

module.exports = useCaseFileMime;