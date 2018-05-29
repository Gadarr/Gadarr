var ModelBase = require('../Settings/SettingsModelBase');

module.exports = ModelBase.extend({
    baseInitialize : ModelBase.prototype.initialize,

    initialize : function() {
        var name = this.get('quality').name;

        this.successMessage = 'Saved ' + name + ' system settings';
        this.errorMessage = 'Couldn\'t save ' + name + ' system settings';

        this.baseInitialize.call(this);
    }
});
