import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  author: DS.belongsTo('author', { inverse: 'books' }),
  publisher: DS.attr('string'),
  
  isValidTitle: Ember.computed.notEmpty('title'),
  isValidPrice: Ember.computed.match('price', /^\d+(.\d{1,2})?$/),
  isValidPublisher: Ember.computed.notEmpty('publisher'),
  isValidAuthor: Ember.computed.notEmpty('author'),
  isValid: Ember.computed.and('isValidTitle', 'isValidPrice', 'isValidPublisher', 'isValidAuthor')

});
