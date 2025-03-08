const {StatusCodes} = require('http-status-codes');
const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        msg: "OK",
        err: {},
        data: {}
    });
};

module.exports = { info };
