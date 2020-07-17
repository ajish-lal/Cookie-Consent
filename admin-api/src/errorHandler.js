//set error

const setError = (req, err) => {
    logger.error(`${req.originalUrl} - ${req.method} - ${req.ip}`);
    reply.send(`Error Occured - ${err}`);
}

module.exports = setError