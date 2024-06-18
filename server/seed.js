import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY ,
    game_name VARCHAR(255),
    rating VARCHAR(255),
    username VARCHAR(255),
    review TEXT
)`);

db.query(`INSERT INTO reviews ( game_name, rating, username, review )
    VALUES ('UNO', $$★★★★★$$, 'rtb25', 'Love this game, always gets competetive while staying fun. You can stack +4 cards!!'),

    ('Monopoly', '★★★', 'joe minaj', 'Have fallen out with family so many times playing this game but it is always a laugh'),
    
    ('Risk', '★', 'Rpo80', $$Wouldn't recommend this game to anyone! Worst game ever$$),

    ('Pictionary', '★★', 'PicMaster52', 'Ok game, just lose interest very quickly while playing'),

    ('Scrabble', '★★★★', 'wordKing', $$I used to play this all the time as a kid and now i'm playing it with mine. Great learning game for them$$),

    ('Guess who', '★★★', 'JollyPop', 'After playing the game a few times I feel although its fun it needs more characters'),

    ('Chess', '★★★★', 'G-Master', 'The best game ever, can play against anyone in the world and always keeps you on your toes'),

    ($$Hungry Hungry Hippo's$$, '★★★', 'hiMOM', 'good game to keep the kids entertained for a short while'),

    ('Jenga', '★★★★', 'BobB', 'cannot get enough of this game, love the tension it builds'),

    ('Cluedo', '★★', 'clueless', 'No idea what to do in this game')
    `);
