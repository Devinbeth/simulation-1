module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const shelf_id = req.params.id[0]
        const bin_id = +req.params.id[1];
        db.create_bin([shelf_id, bin_id, req.body.name, +req.body.price, req.body.image]).then(bin => res.status(200).send(bin))
        .catch(() => res.status(500).send());
    },
    readBins: (req, res) => {
        const db = req.app.get('db');
        db.read_bins([req.params.id]).then(bins => res.status(200).send(bins))
        .catch(() => res.status(500).send());
    },
    readBin: (req, res) => {
        const db = req.app.get('db');
        const shelf_id = req.params.id[0]
        const bin_id = +req.params.id[1];
        db.read_bin([shelf_id, bin_id]).then(bin => res.status(200).send(bin))
        .catch(() => res.status(500).send());
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const shelf_id = req.params.id[0]
        const bin_id = +req.params.id[1];
        db.update_bin([shelf_id, bin_id, req.body.name, +req.body.price, req.body.image]).then(bin => res.status(200).send(bin))
        .catch(() => res.status(500).send());
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const shelf_id = req.params.id[0]
        const bin_id = +req.params.id[1];
        db.delete_bin([shelf_id, bin_id]).then(bin => res.status(200).send(bin))
        .catch(() => res.status(500).send());
    },
};