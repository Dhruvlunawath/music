module.exports.home = (req, res) => {
    const Categories = [
        {
            name: 'Music',
            href: '/music',
        },
        {
            name: 'Festivals',
            href: '/festivals',
        },
    ];

    res.render('home-list', {
        title: 'Latest music and festivals around the world',
        pageHeader: {
            title: 'Latest music and festivals around the world',
        },
        Heading2: 'Select your Choice',
        categories: Categories,
        Heading3: 'We get you the latest trends and festivals going around the world !!',
    });
};
module.exports.cat1 = (req, res) => {
    const Music = [
        {
            name: 'Hollywood',
            href: 'https://www.udiscovermusic.com/stories/best-film-songs-ever/',
        },
        {
            name: 'Bollywood',
            href: 'https://www.jiosaavn.com/featured/weekly-top-songs/8MT-LQlP35c_',
        },
        
    ];

    res.render('Music', {
        title: 'Music',
        contents: Music,
    });
};
module.exports.cat2 = (req, res) => {
    const Festivals = [
        {
            name: 'International',
            href: 'https://www.adotrip.com/blog/most-popular-festivals-in-the-world',
        },
        {
            name: 'National',
            href: 'https://www.fabhotels.com/blog/festivals-of-india/',
        },
    ];

    res.render('Festivals', {
        title: 'Festivals',
        contents: Festivals,
    });
};





