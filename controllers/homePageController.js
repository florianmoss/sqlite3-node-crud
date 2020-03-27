module.exports =  (req, res, next) => {
    res.render('index', {
        title: 'Example for templating.'
    });
}