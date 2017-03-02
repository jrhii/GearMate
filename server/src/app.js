import strava from 'strava-v3';

console.log('running app');

strava.gear.get({id: "b739987"}, (err, payload) => {
    if (err) throw err;

    console.log(payload);
});