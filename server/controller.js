module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.read_shelves().then(shelves => res.status(200).send(shelves))
        .catch(() => res.status(500).send());
    }
};