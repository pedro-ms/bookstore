import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('author');
  },

  actions: {
    saveAuthor(newAuthor) {
      newAuthor.save().then(() => this.transitionTo('authors'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }

});
