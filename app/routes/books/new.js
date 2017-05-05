import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('book');
  },

  actions: {
    saveBook(newBook) {
      newBook.save().then(() => this.transitionTo('books'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
