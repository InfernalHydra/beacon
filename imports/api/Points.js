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

    Meteor.publish('pointsHotspot', () => {
        return Points.find({})
    });
}

Meteor.methods({
    'points.add'(lat, lng)
    {
        check(lat, Number)
        check(lng, Number);
        Points.insert({lat, lng, date : new Date()});
    }
})
