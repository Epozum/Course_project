const mongoose = require("mongoose");

const sessionScheme = new mongoose.Schema( {
        id: String,
        time: String,
        seats: Number,
    },
    { versionKey: false }
);
const Session = mongoose.model("Session", sessionScheme,'Session')

const filmScheme = new mongoose.Schema({
        Title: String,
        Year: String,
        Rated: String,
        Released: String,
        Runtime: String,
        Genre: String,
        Director: String,
        Writer: String,
        Actors: String,
        Plot: String,
        Country: String,
        Poster: String,
        Trailer: String,
        imdbRating: String,
        imdbID: String,
        Type: String,
        Website: String,
        Response: String,
        Sessions: [mongoose.Schema.Types.ObjectId],
    },
    { versionKey: false }
);
const Film = mongoose.model("Film", filmScheme, 'Film');

module.exports = (router) => {
    router.get('/film/list', async (req, res) => {
        const result = await Film.find({})
            .populate({ path: 'Sessions', model: Session })
        return res.json(result)
    }),
    router.get('/film/byID/:id', async (req, res) => {
        const result = await Film.findOne({imdbID:req.params.id})
            .populate({ path: 'Sessions', model: Session })
        return res.json(result)
    })
}

