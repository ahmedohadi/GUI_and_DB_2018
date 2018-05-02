-- CREATE DATABASE Chatboard;
 USE Chatboard;
 DROP TABLE Users;
CREATE TABLE Users(
 firstName VARCHAR(25),
 lastName VARCHAR(25), 
 email VARCHAR(45),
 username VARCHAR(25),
 thepassword VARCHAR(25),
 phone VARCHAR(12),
 zipCode VARCHAR(10),
 party VARCHAR(25),
 office VARCHAR(25),
 description VARCHAR(255),
 picture VARCHAR(100)
 );
 
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Joshua', 'Sylvester', 'joshuasylvester777@gmail.com', 'sillyvester', 'pass', '918-352-0221', '74030', 'democrat', 'Voter', 'I am fiscally conservative and socially liberal. I wish Hillary had won :(', 'josh.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Redneck', 'Joe', 'drinkmorebeer@gmail.com', 'drinkmorebeer', '1234', '918-420-4200', '74030', 'republican', 'Congressman', 'I love my country and I love guns. I only drink Coors.', 'redneck.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Muaz', 'Abrar', 'muaz@biblegateway.com', 'muazmuaz', 'ilovedogs', '214-690-6969', '72575', 'independent', 'Senator', 'I am hoping to one day run for president. I enjoy long walks on the beach. I love dogs (thats totally not my password)', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Traian', 'Pop', 'traian@gmail.com', 'dopeman', 'password', '214-522-3242', '75275', 'democrat', 'Voter', 'Only got this profile to promote my online business. Check out the silkroad.com NOW!!', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Sabrina', 'Peng', 'sabrina@loc.gov', 'sabrinapeng', 'passme', '995-496-1886', '75275', 'independent', 'Senator', 'I am a Lyle Senator', 'sabrina.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Billie', 'Idol', 'billie@hotmail.com', 'billieidolbaby', 'irock', '124-277-8755', '44996', 'independent', 'Senator', 'Yes I am the real Billie Idol. Please dont call me', 'billieidol.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Morty', 'Maliffe', 'mmaliffe6@oakley.com', 'asdf', 'asdf', '407-946-4871', '03496', 'democrat', 'Senator', 'budgetary management', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Verla', 'Daddow', 'vdaddow7@google.es', 'vdaddow7', 'parallelism', '721-132-4621', '11129', 'democrat', 'President', 'mission-critical', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Stormy', 'Daniels', 'stormy@brazzers.com', 'stormybaby', 'ilovetrump', '355-933-5984', '75275', 'republican', 'Voter', 'I shouldnt have signed that NDA', 'stormydaniels.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Donald', 'Trump', 'biggly@trump.com', 'theRealDonald', 'password', '968-171-0877', '20500', 'republican', 'President', 'I hear this is the new twitter so I thought I should give it a shot. Rosie Odonnell is a nasty woman', 'donaldtrump.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Barby', 'Lynes', 'blynesa@mit.edu', 'blynesa', '6th generation', '823-826-6954', '80764', 'republican', 'Congressman', 'capacity', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Happy', 'Le Barre', 'hlebarreb@github.com', 'hlebarreb', 'Ameliorated', '875-153-3737', '66995', 'republican', 'President', 'moratorium', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Nicky', 'Goldsby', 'ngoldsbyc@theguardian.com', 'ngoldsbyc', 'executive', '547-908-2142', '02363', 'republican', 'Congressman', 'firmware', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Mahmud', 'Clabburn', 'mclabburnd@xing.com', 'mclabburnd', 'high-level', '143-446-2293', '85681', 'republican', 'Congressman', 'Devolved', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Gianna', 'Lyptrade', 'glyptradee@ocn.ne.jp', 'glyptradee', 'Multi-tiered', '795-250-1713', '38347', 'republican', 'Congressman', 'array', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Urban', 'Mattacks', 'umattacksf@sourceforge.net', 'umattacksf', 'strategy','977-546-0820', '71179', 'democrat', 'Congressman', 'Up-sized', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Torrence', 'Skahill', 'tskahillg@statcounter.com', 'tskahillg', '5th generation', '749-391-0224', '78802', 'democrat', 'Congressman', 'customer loyalty', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Sianna', 'Owers', 'sowersh@ucoz.ru', 'sowersh', 'Persevering', '712-356-2681', '47407', 'democrat', 'Congressman', 'needs-based', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Courtnay', 'Maffione', 'cmaffionei@alexa.com', 'cmaffionei', 'strategy', '411-760-6934', '79775', 'democrat', 'Congressman', 'Persevering', 'placeholder.png');
insert into Users (firstName, lastName, email, username, thepassword, phone, zipcode, party, office, description, picture) values ('Luelle', 'Readwin', 'lreadwinj@sbwire.com', 'lreadwinj', '6th generation', '182-405-7127', '52076', 'independent', 'Congressman', 'attitude-oriented', 'placeholder.png');

 
 DROP TABLE Issues;
 CREATE TABLE Issues(
 username VARCHAR(25),
 econJobs TINYINT, 
 immigration TINYINT,
 healthCare TINYINT,
 globalWarming TINYINT, 
 budget TINYINT, 
 abortion TINYINT
);

insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('sillyvester', '0', '0', '0', '1', '1', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('drinkmorebeer', '1', '1', '1', '1', '0', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('muazmuaz', '0', '0', '0', '1', '1', '0');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('dopeman', '1', '1', '1', '0', '1', '0');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('sabrinapeng', '0', '0', '1', '1', '0', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('billieidolbaby', '1', '1', '1', '1', '0', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('asdf', '1', '1', '0', '0', '0', '0');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('vdaddow7', '1', '1', '1', '1', '0', '0');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('stormybaby', '0', '1', '0', '0', '1', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('theRealDonald', '0', '1', '1', '1', '1', '0');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('blynesa', '0', '0', '1', '1', '0', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('hlebarreb', '0', '0', '0', '1', '1', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('ngoldsbyc', '1', '0', '0', '0', '0', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('mclabburnd', '0', '1', '0', '0', '1', '0');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('umattacksf', '0', '0', '0', '1', '1', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('tskahillg', '1', '1', '1', '1', '0', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('sowersh', '1', '1', '1', '0', '1', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('cmaffionei', '1', '1', '1', '1', '0', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('glyptradee', '1', '0', '0', '1', '0', '1');
insert into Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) values ('lreadwinj', '1', '0', '1', '1', '1', '1');

 
DROP TABLE Posts;
CREATE TABLE Posts(
userName VARCHAR(31),
body VARCHAR(1000),
tag1 VARCHAR(31),
tag2 VARCHAR(31), 
tag3 VARCHAR(31),
tag4 VARCHAR(31),
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
postdate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
likes INT
);

INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('drinkmorebeer', 'Theyre trying to take our rights away!!!', 'guns','drugs','budget','abortion', 000, '1971-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('drinkmorebeer', 'I just want to farm and drink my beer', 'politics','political','farming','economics', 000, '1972-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('sillyvester', 'Today was great', 'trade','foreign relations','public policy','job growth', 000, '1973-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('dopeman', 'TEACHERS DESERVE MORE PAY', 'political awareness','civil liberties','teachers','domestic', 000, '1974-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('grudham4', 'LOL we are rich and want your oil', 'defense','budget','spending','military', 000, '1975-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('bbromfield5', 'Wow I cant believe he won that election', 'president','trump','donald','the', 000,'1976-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('mmaliffe6', 'Who all is going to the march on sunday?', 'guns','violence','rights','control', 000, '1977-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('vdaddow7', 'Sign my petition to legalize marijuana', 'abortion','women','rights','babies', 000, '1978-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('khrynczyk8', 'My body my choice', 'choice','life','pro','abortion', 000,'1979-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('blynesa', '@Russia stop screwing with our elections', 'hacking','Russia','election','unfair', 000,'1980-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('hlebarreb', 'Free the NK people', 'North Korea','South Korea','war','peace', 000,'1981-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('ngoldsbyc', 'Well america has the strongest military, what about education system?', 'tanks','planes','military','nukes', 000, '1982-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('mclabburnd', 'haha crazy rocket man', 'nukes','North Korea','peace','talks', 000, '1983-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('glyptradee', 'Putin has overstepped this time. I hope the UN intervenes', 'Russia','sanctions','Crimea','Putin', 000, '1984-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('umattacksf', 'Why cant Putin stay in his lane', 'Vladimir','Putin','Russia','Vladimir Putin', 000, '1985-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('tskahillg', 'my name is tskahill', 'Xi','Xi Jinping','China','Xi Jinping', 000, '1985-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('sowersh', 'Make America Great Again', 'The','Donald','Trump','USA', 000, '1986-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('cmaffionei', 'I just want to steal oil from other countries ', 'energy','Rick Perry','oil','gas', 000,'1987-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('lreadwinj', 'Wow this has truly been a great day for science', 'Education','Betsy DeVos','cancer','aids', 000,'1988-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('theRealDonald', 'Employment is up, Taxes are DOWN. Enjoy', 'energy','Rick Perry','oil','gas', 000,'1987-01-01 00:00:01', 0);
INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, postdate, likes) values ('stormybaby', 'The correct spelling is skank', 'donald','trump','ndas','respectme', 000,'1988-01-01 00:00:01', 0);
 
 DROP TABLE Comments;
 CREATE TABLE Comments(
 id INT,
 userName VARCHAR(31),
 body VARCHAR(250)
 );
 
INSERT INTO Comments (id, userName, body) VALUES (1, 'drinkmorebeer', 'DPRK BEST KOREA');
INSERT INTO Comments (id, userName, body) VALUES (1, 'blynesa', 'RUSSIA #1 NO USA');
INSERT INTO Comments (id, userName, body) VALUES (4, 'ngoldsbyc', 'AMERICAN!!!');
INSERT INTO Comments (id, userName, body) VALUES (7, 'hlebarreb', 'KEEP AMERICA GREAT');
INSERT INTO Comments (id, userName, body) VALUES (12, 'ksayle2', 'CHINA #1');

INSERT INTO Comments (id, userName, body) VALUES (2, 'tskahillg', 'Japan is awesome');
INSERT INTO Comments (id, userName, body) VALUES (18, 'hlebarreb', 'Germany will rise again');
INSERT INTO Comments (id, userName, body) VALUES (13, 'drinkmorebeer', 'The South will RISE AGAIN!');
INSERT INTO Comments (id, userName, body) VALUES (18, 'abain3', 'wow yalls comment game is strong');
INSERT INTO Comments (id, userName, body) VALUES (6, 'bbromfield5', 'Russia > USA');
INSERT INTO Comments (id, userName, body) VALUES (7, 'blynesa', 'Restore the CCCP and USSR');

INSERT INTO Comments (id, userName, body) VALUES (8, 'mcoviello1', 'Seize the means of production!');
INSERT INTO Comments (id, userName, body) VALUES (12, 'ngoldsbyc', 'The gentle laborer will no longer suffer');
INSERT INTO Comments (id, userName, body) VALUES (15, 'bbromfield5', 'Communism will take over the world');
INSERT INTO Comments (id, userName, body) VALUES (10, 'mcoviello1', 'Capitalists are greedy');
INSERT INTO Comments (id, userName, body) VALUES (11, 'sowersh', 'communism Never again');

INSERT INTO Comments (id, userName, body) VALUES (19, 'khrynczyk8', 'Make money');
INSERT INTO Comments (id, userName, body) VALUES (14, 'abain3', 'Soviet economy is bad');
INSERT INTO Comments (id, userName, body) VALUES (5, 'lreadwinj', 'I love Kim Jung-Un');
INSERT INTO Comments (id, userName, body) VALUES (9, 'khrynczyk8', 'I love my country');



DROP TABLE Locations;
CREATE TABLE Locations(
id INT,
locationName VARCHAR(40),
hours VARCHAR(30),
address VARCHAR(30),
zipcode VARCHAR(5),
info VARCHAR(200),
picture VARCHAR(25)
);

insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (1, 'Ward, Howell and Morissette', '9:25 AM - 09:00PM', '23586 Oak Drive', '08342', null, 'COsKVo.png');
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (2, 'Borer, Hammes and Balistreri', '12:21 AM  - 11:00PM', '731 Magdeline Parkway', '95236', 'You must walk around to the back door', 'location.png');
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (3, 'O''Kon, Sanford and Haley', '3:03 PM - 11:00PM', '94000 American Trail', '14724', null, 'EKZCqM.png');
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (4, 'Kautzer-Erdman', '2:59 AM  - 10:00PM', '783 Colorado Center', '48207', 'voting closes 15 minutes before closing', 'location.png');
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (5, 'Maggio, Boyle and Lemke', '10:21 AM  - 11:00PM', '19490 Melrose Lane', '47938', null, 'location.png');
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (6, 'Waters, Turner and Collins', '11:58 AM  - 11:00PM', '48519 Park Meadow Circle', '31952', null, 'location.png');
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (7, 'Parisian, Jast and Feeney', '10:14 AM  - 11:00PM', '74 Declaration Terrace', '07795', 'We only accept passport', 'BLpkEi.png');
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (8, 'Krajcik, Stark and Gislason', '2:27 PM  - 11:00PM', '9 Arkansas Drive', '67747', 'No bags allowed on the property', 'location.png');
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (9, 'Considine-Stiedemann', '12:18 AM - 10:00PM', '2 Dapin Parkway', '18347', null, null);
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (10, 'Langworth-Hermann', '11:01 AM  - 10:00PM', '9 Cottonwood Junction', '23794', null, 'GozexY.png');
insert into Locations (id, locationName, hours, address, zipcode, info, picture) values (11, 'SMU-Dedman', '11:00 AM - 11:00PM', '6000 Airline Rd', '75205', 'Must have a student ID  to vote', 'smu.png');




 DROP TABLE History;
CREATE TABLE History (userName VARCHAR(40), vote1 VARCHAR(100), vote2 VARCHAR(100), vote3 VARCHAR(100), vote4 VARCHAR(100), vote5 VARCHAR(100),vote6 VARCHAR(100), vote7 VARCHAR(100), vote8 VARCHAR(100), vote9 VARCHAR(100), vote10 VARCHAR(100));

INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('drinkmorebeer', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594','Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('muazmuaz', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594','Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('sabrinapeng', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594','Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('billieidolbaby', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594','Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('asdf', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('vdaddow7', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('theRealDonald', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594','Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('vdaddow7', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594','Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('khrynczyk8', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('blynesa', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('hlebarreb', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('ngoldsbyc', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('mclabburnd', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('glyptradee', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('umattacksf', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934'); 
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('tskahillg', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('sowersh', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934'); 
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('cmaffionei', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');
INSERT INTO History (userName, vote1, vote2, vote3, vote4, vote5, vote6, vote7, vote8, vote9, vote10) VALUES ('lreadwinj', 'Senate Bill #123', 'House Bill #4', 'House Bill #4123', 'Duck Bill', 'Senate Bill #1232', 'House Bill #594', 'Senate Bill #7578', 'Platypus Bill', 'Electric Bill', 'House Bill #9934');

DELETE FROM Posts WHERE id= 2;
SELECT * FROM Users;