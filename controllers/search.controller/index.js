var SearchModule = function () {
    const controller = require('./controller');

    var publicAPI = {
        init: init
    };
    
    return publicAPI;

    function init(app) {
        app.route('/search/:company_name').get(controller.search_companies);
        app.route('/details').post(controller.get_details);
    }
};

module.exports = new SearchModule();