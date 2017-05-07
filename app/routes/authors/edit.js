import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('author', params.author_id);
  },
  
  actions: {
    saveAuthor(author) {
      author.save().then(() => this.transitionTo('authors'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
