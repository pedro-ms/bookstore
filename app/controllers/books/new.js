import Ember from 'ember';

export default Ember.Controller.extend({
    author: null,
    
    actions: {
        selectAuthor(author) {
          this.set('author', author);
        }
    }
});