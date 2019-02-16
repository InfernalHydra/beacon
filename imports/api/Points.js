import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default Points = new Mongo.Collection('points');

Points.deny({
    insert() {return true;},
    update() {return true;},
    remove() {return true;},
});

if(Meteor.isServer)
{
    Meteor.publish('points', () => {
        return Points.find({});        
    });
}

Meteor.methods({
    'points.add'(latitute, longitude)
    {
        check(latitute, Number)
        check(longitude, Number);
        Points.add({latitute, longitude, date : new Date()});
    }
})
