import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book', { async: true }),
  
  isValidName: Ember.computed.notEmpty('name'),
  isValid: Ember.computed.and('isValidName')
});
