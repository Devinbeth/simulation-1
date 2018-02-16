module.exports = {
    getBins: (req, res) => {
        const db = req.app.get('db');
        db.read_bins([req.params.id]).then(bins => res.status(200).send(bins))
        .catch(() => res.status(500).send());
    },
    getBin: (req, res) => {
        const db = req.app.get('db');
        db.read_bin([req.params.id]).then(bin => res.status(200).send(bin))
        .catch(() => res.status(500).send());
    }
};