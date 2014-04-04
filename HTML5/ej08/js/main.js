$(function(){
    'use strict';
var db;
var createdefaults = function(){
db = openDatabase('tweetdb', '1.0', 'All my tweets', 2 * 1024 * 1024);
db.transaction(function (tx) {
    tx.executeSql('DROP TABLE tweets', []);
    tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(id, user, date, text)', [], getTweets);
    tx.executeSql('CREATE TABLE IF NOT EXISTS users(id, name, image)', [], getUsers);
});
};

var getTweets = function () {
            $.ajax({
                    url : 'json/tweets.json',
                    type : 'GET',
                    dataType : 'json',
                    cache : false,  
                    success : function(data){
                        $.each(data, function(index) {
                            var tweet = data[index];
                            db.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
                            var time = (new Date(Date.parse(tweet.created_at))).getTime();
                            tx.executeSql('INSERT INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)',
                                [tweet.id, tweet.user, tweet.date, tweet.text]);
                            });
                        });
                    },
                    error : function(jqXHR, textStatus, errorThrown){
                        console.log(errorThrown);
                    }
                });

};
var getUsers = function () {


            $.ajax({
                    url : 'json/users.json',
                    type : 'GET',
                    dataType : 'json',
                    cache : false,  
                    success : function(data){
                        $.each(data, function(index) {
                            var user = data[index];
                            db.transaction(function (tx) { //CADA USER EN UNA TRANSACCION → Procesa todas
                            tx.executeSql('INSERT INTO users (id, name, image) VALUES (?, ?, ?)',
                                [user.id, user.name, user.image]);
                            });
                        });
                    },
                    error : function(jqXHR, textStatus, errorThrown){
                        console.log(errorThrown);
                    }
                });

};
var getUser = function (user) {

        if(user.row.length === 0){
            $.ajax({
                    url : '../servidor/autocompletaMunicipios.php',
                    type : 'GET',
                    data: {user : user},
                    dataType : 'json',
                    cache : false,  
                    success : function(data){
                        db.transaction(function (tx) { //CADA USER EN UNA TRANSACCION → Procesa todas
                        tx.executeSql('INSERT INTO users (id, name, image) VALUES (?, ?, ?)',
                        [user.id, user.name, user.image]);
                        });
                    },
                    error : function(jqXHR, textStatus, errorThrown){
                        console.log(errorThrown);
                    }
                });
        }

};

var addTweet = function(tweet){
    db.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
    var time = (new Date(Date.parse(tweet.created_at))).getTime();
    tx.executeSql('INSERT INTO tweets (id, user, date, text) VALUES (?, ?, ?, ?)',
    [tweet.id, tweet.user, time / 1000, tweet.text]);
    tx.executeSql('SELECT user FROM tweets WHERE tweets.user = tweet.user', [time], getUser);

    });




};
var removeTweet = function(id, success){
    db.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
    tx.executeSql('SELECT * FROM tweets WHERE id = id', [time], success);
    tx.executeSql('DELETE * FROM tweets WHERE id = id', [time], console.log('your tweet is deleted'));

    });
};
var updateTweet = function(tweet){
    db.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
    tx.executeSql('UPDATE tweets SET tweets.id = tweet.id, tweets.user = tweet.user, tweets.date = tweet.date, tweets.text = tweet.text WHERE tweets.id = tweet.id', [time], console.log('your tweet is updated'));

    });
};
var getTweet = function(date, success){
    db.transaction(function (tx) { //CADA TWEET EN UNA TRANSACCION → Procesa todas
    tx.executeSql('SELECT * FROM tweets WHERE tweets.date = date', [time], success);

    });
};

createdefaults();
});
