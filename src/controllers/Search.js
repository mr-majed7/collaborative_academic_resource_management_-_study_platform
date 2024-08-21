Book = require('../models/book');
LectureNotes = require('../models/lectureNotes');
LectureVideo = require('../models/LectureVideo');  
Slide = require('../models/slide'); 
const {Op} = require('sequelize'); 



module.exports.srch = async(req, res)=> {
    const { query, filter } = req.body;

    const searchResults = [];
    try {
        // Search based on the filter and check Privacy
        if (filter === 'all' || filter === 'book') {
            const books = await Book.findAll({
                where: {
                    Title: {
                        [Op.like]: `%${query}%`
                    },
                    Privacy: 'public'  // Only include public books
                }
            });
            searchResults.push(...books);
        }

        if (filter === 'all' || filter === 'lectureNotes') {
            const lectureNotes = await LectureNotes.findAll({
                where: {
                    Title: {
                        [Op.like]: `%${query}%`
                    },
                    Privacy: 'public'  // Only include public lecture notes
                }
            });
            searchResults.push(...lectureNotes);
        }

        if (filter === 'all' || filter === 'lectureVideo') {
            const lectureVideos = await LectureVideo.findAll({
                where: {
                    Title: {
                        [Op.like]: `%${query}%`
                    },
                    Privacy: 'public'  // Only include public lecture videos
                }
            });
            searchResults.push(...lectureVideos);
        }

        if (filter === 'all' || filter === 'slides') {
            const slides = await Slide.findAll({
                where: {
                    Title: {
                        [Op.like]: `%${query}%`
                    },
                    Privacy: 'public'  // Only include public slides
                }
            });
            searchResults.push(...slides);
        }

        // Render the results to the search results page
         res.render('searchResult', { searchResults });
        
        console.log(searchResults);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('An error occurred while searching');
    }
    
    

};



