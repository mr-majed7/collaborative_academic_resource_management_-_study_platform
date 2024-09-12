

const Book = require('../models/book'); 
const Folder = require('../models/folder'); 
const LectureNotes = require('../models/lectureNotes');
const LectureVideo = require('../models/lectureVideo');
const Slide = require('../models/slide');

module.exports.booksRevision = async(Username) => { 

const booksForRevision = await Book.findAll({
    include: [{
        model: Folder,
        where: {
            username: Username
        },
        attributes: []
    }],
    where: {
        Progress: 0
    },
    attributes: ['Title','_id'] // Only select the Title attribute
});
return booksForRevision;
}


module.exports.notesRevision = async(Username) => {
    const notesForRevision = await LectureNotes.findAll({
        include: [{
            model: Folder,
            where: {
                username: Username
            },
            attributes: []
        }],
        where: {
            Progress: 0
        },
        attributes: ['Title','_id'] // Only select the Title attribute
    });
    return notesForRevision;
}

module.exports.videosRevision = async(Username) => {
    const videosForRevision = await LectureVideo.findAll({
        include: [{
            model: Folder,
            where: {
                username: Username
            },
            attributes: []
        }],
        where: {
            Progress: 0
        },
        attributes: ['Title','FileLink','_id'] // Only select the Title attribute
    });
    return videosForRevision;
}

module.exports.slidesRevision = async(Username) => {
    const slidesForRevision = await Slide.findAll({
        include: [{
            model: Folder,
            where: {
                username: Username
            },
            attributes: []
        }],
        where: {
            Progress: 0
        },
        attributes: ['Title','FileLink','_id'] // Only select the Title attribute
    });
    return slidesForRevision;
}


module.exports.revisionDone = async(req, res) => {
    const { id } = req.params;
    const  {q}  = req.query;
    try {
        // Update Progress from 1 to 0 in Book
        if (q === 'book') {
            await Book.update({ Progress: 1 }, {
                where: {
                    _id: id
                }
            });
            // res.json({ message: "Progress Updated" });
        }
        if (q === 'note') {
            await LectureNotes.update({ Progress: 1 }, {
                where: {
                    _id: id
                }
            });
            // res.json({ message: "Progress Updated" });

        }
        // Update Progress from 1 to 0 in LectureNotes
        if (q === 'video') {
            await LectureVideo.update({ Progress: 1 }, {
                where: {
                    _id: id
                }
            });
            // res.json({ message: "Progress Updated" });

        }    
        // Update Progress from 1 to 0 in LectureVideo
        if (q === 'slide') {
            await Slide.update({ Progress: 1 }, {
                where: {
                    _id: id
                }
            });
            // res.json({ message: "Progress Updated" });
        }
        res.redirect('back')
        // Update Progress from 1 to 0 in Slide
    
      } catch (err) {
        console.error("Error updating Progress:", err);
      }
    

}