import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('author');
  },
  
  actions: {
    deleteAuthor(author) {
      let confirmation = confirm('Are you sure?');
  
      if (confirmation) {
        author.destroyRecord();
      }
    }
    
  }


});
