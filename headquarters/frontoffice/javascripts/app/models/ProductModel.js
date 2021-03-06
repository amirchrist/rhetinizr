define(["application", "jquery", "backbone"],
  function(App, $, Backbone) {
    // Creates a new Backbone Model class object
    var Model = Backbone.Model.extend({
      // Model Constructor
      initialize: function() {

      },

      // Default values for all of the Model attributes
      defaults: {
        'name': '',
        'description': '',
        'version': ''
      },

      // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
      validate: function(attrs) {

      }

    });

    // Returns the Model class
    return Model;

  }

);