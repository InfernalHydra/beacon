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

function getDistanceFromLatLonInMi(lat1,lon1,lat2,lon2) {
    var R = 3959; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

Meteor.methods({
    'points.add'(lat, lng)
    {
        check(lat, Number)
        check(lng, Number);
        Points.insert({lat, lng, date : new Date()});
    },
    'points.findNearby'(lat, lng)
    {
        check(lat, Number);
        check(lng, Number);
        var ret = [];
        Points.find({}).fetch().forEach((obj) => {
            var dist = getDistanceFromLatLonInMi(lat, lng, obj.lat, obj.lng);
            if(dist < 5) {
                ret.push(obj);
            }
        })
        console.log(ret);
        return ret;
    }
})
