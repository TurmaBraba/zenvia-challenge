function isNullEmptyUndefinedData(data) {
    return (((data.length === 0) || (data === null)|| (data === undefined)) && true)
}

module.exports = isNullEmptyUndefinedData;