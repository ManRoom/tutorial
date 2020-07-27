var fs = require('fs');



var write_str = fs.writeFileSync('data_for_Mongo.txt', "db.source.insertMany([");


for(var _id = 0; _id < 100; _id++) {

    var write_str = fs.appendFileSync('data_for_Mongo.txt', "{\n" + 
                                                                                    "_id" + ": " + _id  + ",\n" + 
                                                                                    '"name" : ' + '"user_"' + ",\n" + 
                                                                                    '"pass" :' + " [" + '"' + _id + "0808" + _id + '"' + ", " 
                                                                                     + '"'  + _id + "3030" + _id + '"' + ", " + '"' + _id + "0909" + _id + '"' +"],\n" + 
                                                                                    '"emails" :' + " { " +   
                                                                                                    '"email_1" : "q*****@gmail.com",\n' +
                                                                                                    '"email_2" : "s*****@gmail.com",\n' +
                                                                                                    '"email_3" : "r*****@gmail.com"}\n' +
                                                                                                    "},\n");
}

var write_str = fs.appendFileSync('data_for_Mongo.txt', "])");

//data_for_Mongo
