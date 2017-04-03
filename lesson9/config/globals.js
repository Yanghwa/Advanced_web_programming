/**
 * Created by RFreeman on 2/8/2017.
 */

// array of global variables
module.exports = {
    db: 'mongodb://Yanghwa:wjdfmd8412@ds145639.mlab.com:45639/junghwandb',	
    // db: 'mongodb://w2017dba:********@ds145669.mlab.com:45669/comp2068-w2017'  // mlab
    facebook: {
    	clientID: '195980897527589',
    	clientSecret: '3798aeb2082a82c30872049d2e1e32fb',
    	callbackURL: 'http://localhost:3000/facebook/callback'

    },
    google: {
    	cilentID: '49651756491-nkappqe5hmd367q4o8h5r7ll5vivq6pc.apps.googleusercontent.com',
    	clientSecret: 'BHM2tzcsr7nAJiXGRH5whfJS',
    	callbackURL: 'http://localhost:3000/google/callback'
    }

};
