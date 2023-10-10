// req is an instance of http.IncomingMessage
// res is an instance of http.ServerResponse
function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}

export default handler;
