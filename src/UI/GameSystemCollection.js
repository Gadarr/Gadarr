var Backbone = require('backbone');
var GameSystemModel = require('./GameSystemnModel');

module.exports = Backbone.Collection.extend({
    model : QualityDefinitionModel,
    url   : window.NzbDrone.ApiRoot + '/qualitydefinition'
});
