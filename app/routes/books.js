import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
<<<<<<< HEAD
  },
<<<<<<< HEAD
=======

  actions: {
    saveBook(newBook) {
      newBook.save().then(() => this.transitionTo('books'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

>>>>>>> ppms-create-book
=======
  }
>>>>>>> ppms-setup-firebase
});
