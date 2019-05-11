let i = 0;

const handler = (req, res) => {
    i++;
    res.end(`Hello world. ${i}`);
}

module.exports = handler
