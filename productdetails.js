

const PRODUCT_CATALOG = {
    'the-silent-patient-alex-michaelides': { id: 'the-silent-patient-alex-michaelides', name: 'The Silent Patient', author: 'Alex Michaelides', price: 499, image: 'silentpatient.jpeg', edition: 'Paperback', link: 'productdetails.html?id=the-silent-patient-alex-michaelides' },
    'atomic-habits-james-clear': { id: 'atomic-habits-james-clear', name: 'Atomic Habits', author: 'James Clear', price: 349, image: 'atomichabits.jpeg', edition: 'Paperback', link: 'productdetails.html?id=atomic-habits-james-clear' },
    'the-midnight-library-matt-haig': { id: 'the-midnight-library-matt-haig', name: 'The Midnight Library', author: 'Matt Haig', price: 449, image: 'midnightlibraries.jpeg', edition: 'Paperback', link: 'productdetails.html?id=the-midnight-library-matt-haig' },
    'dune-frank-herbert': { id: 'dune-frank-herbert', name: 'Dune', author: 'Frank Herbert', price: 599, image: 'dune.jpg', edition: 'Paperback', link: 'productdetails.html?id=dune-frank-herbert' },
    'project-hail-mary-andy-weir': { id: 'project-hail-mary-andy-weir', name: 'Project Hail Mary', author: 'Andy Weir', price: 549, image: 'projecthailmary.jpg', edition: 'Paperback', link: 'productdetails.html?id=project-hail-mary-andy-weir' },
    'where-the-crawdads-sing-delia-owens': { id: 'where-the-crawdads-sing-delia-owens', name: 'Where the Crawdads Sing', author: 'Delia Owens', price: 479, image: 'wherethecrowdadssing.jpg', edition: 'Paperback', link: 'productdetails.html?id=where-the-crawdads-sing-delia-owens' },
    'verity-colleen-hoover': { id: 'verity-colleen-hoover', name: 'Verity', author: 'Colleen Hoover', price: 499, image: 'Verity.jpg', edition: 'Paperback', link: 'productdetails.html?id=verity-colleen-hoover' },
    'verity-collen-hoover': { id: 'verity-collen-hoover', name: 'Verity', author: 'Collen Hoover', price: 499, image: 'Verity.jpg', edition: 'Paperback', link: 'productdetails.html?id=verity-collen-hoover' },
    'ikigai-hector-garcia-and-francesc-miralles': { id: 'ikigai-hector-garcia-and-francesc-miralles', name: 'Ikigai', author: 'Hector Garcia and Francesc Miralles', price: 699, image: 'ikigai.jpeg', edition: 'Paperback', link: 'productdetails.html?id=ikigai-hector-garcia-and-francesc-miralles' },
    'ikigai-yukari-mitsuhasi': { id: 'ikigai-yukari-mitsuhasi', name: 'IKIGAI', author: 'Yukari Mitsuhasi', price: 699, image: 'ikigai.jpeg', edition: 'Paperback', link: 'productdetails.html?id=ikigai-yukari-mitsuhasi' },
    'the-diary-of-a-young-girl-anne-frank': { id: 'the-diary-of-a-young-girl-anne-frank', name: 'The Diary of a Young Girl', author: 'Anne Frank', price: 799, image: 'diaryofayounggirl.jpg', edition: 'Paperback', link: 'productdetails.html?id=the-diary-of-a-young-girl-anne-frank' },
    'truly-devious-maureen-johnson': { id: 'truly-devious-maureen-johnson', name: 'Truly Devious', author: 'Maureen Johnson', price: 649, image: 'trulydevious.jpg', edition: 'Paperback', link: 'productdetails.html?id=truly-devious-maureen-johnson' },
    'deathly-fates-tesia-tsai': { id: 'deathly-fates-tesia-tsai', name: 'Deathly Fates', author: 'Tesia Tsai', price: 699, image: 'deathlyfates.jpg', edition: 'Paperback', link: 'productdetails.html?id=deathly-fates-tesia-tsai' },
    'deathly-fates-tesia-tesia': { id: 'deathly-fates-tesia-tesia', name: 'Deathly Fates', author: 'Tesia Tesia', price: 699, image: 'deathlyfates.jpg', edition: 'Paperback', link: 'productdetails.html?id=deathly-fates-tesia-tesia' },
    'pride-and-prejudice-jane-austen': { id: 'pride-and-prejudice-jane-austen', name: 'Pride and Prejudice', author: 'Jane Austen', price: 1890, image: 'prideandprejudice.jpg', edition: 'Paperback', link: 'productdetails.html?id=pride-and-prejudice-jane-austen' },
    'the-spanish-love-deception-elena-armes': { id: 'the-spanish-love-deception-elena-armes', name: 'The Spanish Love Deception', author: 'Elena Armes', price: 699, image: 'spanishlovedeciption.jpg', edition: 'Paperback', link: 'productdetails.html?id=the-spanish-love-deception-elena-armes' },
    'the-seven-husbands-of-evelyn-hugo-taylor-jenkins-reid': { id: 'the-seven-husbands-of-evelyn-hugo-taylor-jenkins-reid', name: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', price: 690, image: 'thesevenhusbandsofevelynhugo.jpg', edition: 'Paperback', link: 'productdetails.html?id=the-seven-husbands-of-evelyn-hugo-taylor-jenkins-reid' },
    'gone-girl-gillian-flynn': { id: 'gone-girl-gillian-flynn', name: 'Gone Girl', author: 'Gillian Flynn', price: 899, image: 'gonegirl.jpg', edition: 'Paperback', link: 'productdetails.html?id=gone-girl-gillian-flynn' },
    'the-way-of-kings-brandon-sanderson': { id: 'the-way-of-kings-brandon-sanderson', name: 'The Way of Kings', author: 'Brandon Sanderson', price: 799, image: 'wayofkings.jpg', edition: 'Hardcover', link: 'productdetails.html?id=the-way-of-kings-brandon-sanderson' },
    'vampire-diaries-l-j-smith': { id: 'vampire-diaries-l-j-smith', name: 'Vampire Diaries', author: 'L.J. Smith', price: 1649, image: 'vampirediaries.jpeg', edition: 'Paperback', link: 'productdetails.html?id=vampire-diaries-l-j-smith' },
    'the-name-of-the-wind-patrick-rothfuss': { id: 'the-name-of-the-wind-patrick-rothfuss', name: 'The Name of the Wind', author: 'Patrick Rothfuss', price: 699, image: 'nameofthewind.jpg', edition: 'Paperback', link: 'productdetails.html?id=the-name-of-the-wind-patrick-rothfuss' },
    'a-game-of-thrones-george-r-r-martin': { id: 'a-game-of-thrones-george-r-r-martin', name: 'A Game of Thrones', author: 'George R.R. Martin', price: 549, image: 'gameofthrones.jpg', edition: 'Paperback', link: 'productdetails.html?id=a-game-of-thrones-george-r-r-martin' },
    'the-priory-of-the-orange-tree-samantha-shannon': { id: 'the-priory-of-the-orange-tree-samantha-shannon', name: 'The Priory of the Orange Tree', author: 'Samantha Shannon', price: 849, image: 'priorityoforangetree.jpg', edition: 'Paperback', link: 'productdetails.html?id=the-priory-of-the-orange-tree-samantha-shannon' },
    'circe-madeline-miller': { id: 'circe-madeline-miller', name: 'Circe', author: 'Madeline Miller', price: 599, image: 'circle.jpg', edition: 'Paperback', link: 'productdetails.html?id=circe-madeline-miller' },
    'wings-of-fire-dr-a-p-j-abdul-kalam': { id: 'wings-of-fire-dr-a-p-j-abdul-kalam', name: 'Wings of Fire', author: 'Dr. A.P.J. Abdul Kalam', price: 499, image: 'wingsoffire.jpg', edition: 'Paperback', link: 'productdetails.html?id=wings-of-fire-dr-a-p-j-abdul-kalam' },
    'who-will-cry-when-you-die-robin-sharma': { id: 'who-will-cry-when-you-die-robin-sharma', name: 'Who Will Cry When You Die', author: 'Robin Sharma', price: 549, image: 'whowillcrywhenyoudie.jpg', edition: 'Paperback', link: 'productdetails.html?id=who-will-cry-when-you-die-robin-sharma' },
    'lionel-messi-and-the-art-of-living-andy-west': { id: 'lionel-messi-and-the-art-of-living-andy-west', name: 'Lionel Messi and the Art of Living', author: 'Andy West', price: 699, image: 'lionelmessiandtheartofliving.jpg', edition: 'Paperback', link: 'productdetails.html?id=lionel-messi-and-the-art-of-living-andy-west' },
    'stop-letting-everything-affect-you-daniel-chidiac': { id: 'stop-letting-everything-affect-you-daniel-chidiac', name: 'Stop Letting Everything Affect You', author: 'Daniel Chidiac', price: 599, image: 'stoplettingeverythingaffectyou.jpg', edition: 'Paperback', link: 'productdetails.html?id=stop-letting-everything-affect-you-daniel-chidiac' },
    'the-girl-in-the-house-harshawardhan-rao': { id: 'the-girl-in-the-house-harshawardhan-rao', name: 'The Girl in the House', author: 'Harshawardhan Rao', price: 599, image: 'thegirlinthehouse.jpg', edition: 'Paperback', link: 'productdetails.html?id=the-girl-in-the-house-harshawardhan-rao' },
    'that-night-four-friends-twenty-years-nidhi-upadhyay': { id: 'that-night-four-friends-twenty-years-nidhi-upadhyay', name: 'That Night, Four Friends, Twenty Years', author: 'Nidhi Upadhyay', price: 499, image: 'thatnightfourfriendstwentyyears.jpg', edition: 'Paperback', link: 'productdetails.html?id=that-night-four-friends-twenty-years-nidhi-upadhyay' },
    'the-turn-of-the-screw-henry-james': { id: 'the-turn-of-the-screw-henry-james', name: 'The Turn of the Screw', author: 'Henry James', price: 399, image: 'theturnofthescrew.jpg', edition: 'Paperback', link: 'productdetails.html?id=the-turn-of-the-screw-henry-james' },
    'the-crime-at-black-dudley-margery-allingham': { id: 'the-crime-at-black-dudley-margery-allingham', name: 'The Crime at Black Dudley', author: 'Margery Allingham', price: 499, image: 'thecrimeatblackdudley.jpg', edition: 'Paperback', link: 'productdetails.html?id=the-crime-at-black-dudley-margery-allingham' },
    'the-patient-in-room-18-mignon-g-eberhart': { id: 'the-patient-in-room-18-mignon-g-eberhart', name: 'The Patient in Room 18', author: 'Mignon G. Eberhart', price: 449, image: 'patientinroom18.jpg', edition: 'Paperback', link: 'productdetails.html?id=the-patient-in-room-18-mignon-g-eberhart' },
    'steve-jobs-walter-isaacson': { id: 'steve-jobs-walter-isaacson', name: 'Steve Jobs', author: 'Walter Isaacson', price: 799, image: 'stevejobs.jpg', edition: 'Paperback', link: 'productdetails.html?id=steve-jobs-walter-isaacson' },
    'queen-elisabeth-ii-hugo-vickers': { id: 'queen-elisabeth-ii-hugo-vickers', name: 'Queen Elisabeth II', author: 'Hugo Vickers', price: 699, image: 'queenelizabethII.jpg', edition: 'Paperback', link: 'productdetails.html?id=queen-elisabeth-ii-hugo-vickers' },
    'korean-messiah-jonathan-cheng': { id: 'korean-messiah-jonathan-cheng', name: 'Korean Messiah', author: 'Jonathan Cheng', price: 899, image: 'koreanmessiah.jpg', edition: 'Hardcover', link: 'productdetails.html?id=korean-messiah-jonathan-cheng' },
    'the-madness-pill-justin-garson': { id: 'the-madness-pill-justin-garson', name: 'The Madness Pill', author: 'Justin Garson', price: 799, image: 'madnesspill.jpg', edition: 'Hardcover', link: 'productdetails.html?id=the-madness-pill-justin-garson' },
    'true-color-kory-stamper': { id: 'true-color-kory-stamper', name: 'True Color', author: 'Kory Stamper', price: 699, image: 'truecolor.jpg', edition: 'Hardcover', link: 'productdetails.html?id=true-color-kory-stamper' },
    'the-escape-room-marissa-meyer': { id: 'the-escape-room-marissa-meyer', name: 'The Escape Room', author: 'Marissa Meyer', price: 599, image: 'escaperoom.jpg', edition: 'Hardcover', link: 'productdetails.html?id=the-escape-room-marissa-meyer' },
    'flirting-with-murder-amanda-sellet': { id: 'flirting-with-murder-amanda-sellet', name: 'Flirting with Murder', author: 'Amanda Sellet', price: 499, image: 'flirtingwithmurder.jpg', edition: 'Paperback', link: 'productdetails.html?id=flirting-with-murder-amanda-sellet' },
    'summer-official-rebekah-weatherspoon': { id: 'summer-official-rebekah-weatherspoon', name: 'Summer Official', author: 'Rebekah Weatherspoon', price: 449, image: 'summerofficial.jpg', edition: 'Paperback', link: 'productdetails.html?id=summer-official-rebekah-weatherspoon' },
    'they-want-us-dead-cl-montblac': { id: 'they-want-us-dead-cl-montblac', name: 'They Want Us Dead', author: 'CL Montblac', price: 549, image: 'theywantusdead.jpg', edition: 'Paperback', link: 'productdetails.html?id=they-want-us-dead-cl-montblac' },
    'this-could-all-go-bad-spencer-hall': { id: 'this-could-all-go-bad-spencer-hall', name: 'This Could All Go Bad', author: 'Spencer Hall', price: 499, image: 'thiscouldallgobad.jpg', edition: 'Paperback', link: 'productdetails.html?id=this-could-all-go-bad-spencer-hall' }
};

const BOOK_DETAILS = {
    default: { genre: 'General Reading', publisher: 'Book Haven Picks', language: 'English', format: 'Paperback', pages: 'Varies' },
    'the-silent-patient-alex-michaelides': { genre: 'Psychological Thriller', publisher: 'Celadon Books', language: 'English', format: 'Paperback', pages: '336' },
    'atomic-habits-james-clear': { genre: 'Self Help', publisher: 'Avery', language: 'English', format: 'Paperback', pages: '320' },
    'the-midnight-library-matt-haig': { genre: 'Contemporary Fiction', publisher: 'Canongate Books', language: 'English', format: 'Paperback', pages: '304' },
    'dune-frank-herbert': { genre: 'Science Fiction', publisher: 'Ace Books', language: 'English', format: 'Paperback', pages: '688' },
    'project-hail-mary-andy-weir': { genre: 'Science Fiction', publisher: 'Ballantine Books', language: 'English', format: 'Paperback', pages: '496' },
    'where-the-crawdads-sing-delia-owens': { genre: 'Literary Fiction', publisher: "G.P. Putnam's Sons", language: 'English', format: 'Paperback', pages: '384' },
    'verity-colleen-hoover': { genre: 'Romantic Thriller', publisher: 'Grand Central Publishing', language: 'English', format: 'Paperback', pages: '336' },
    'verity-collen-hoover': { genre: 'Romantic Thriller', publisher: 'Grand Central Publishing', language: 'English', format: 'Paperback', pages: '336' },
    'the-name-of-the-wind-patrick-rothfuss': { genre: 'Fantasy', publisher: 'DAW Books', language: 'English', format: 'Paperback', pages: '672' },
    'ikigai-hector-garcia-and-francesc-miralles': { genre: 'Self Help', publisher: 'Penguin Life', language: 'English', format: 'Paperback', pages: '208' },
    'ikigai-yukari-mitsuhasi': { genre: 'Self Help', publisher: 'Kyle Books', language: 'English', format: 'Paperback', pages: '112' },
    'the-diary-of-a-young-girl-anne-frank': { genre: 'Biography', publisher: 'Penguin Books', language: 'English', format: 'Paperback', pages: '352' },
    'truly-devious-maureen-johnson': { genre: 'Young Adult Mystery', publisher: 'Katherine Tegen Books', language: 'English', format: 'Paperback', pages: '448' },
    'deathly-fates-tesia-tsai': { genre: 'Young Adult Fantasy', publisher: 'Independent', language: 'English', format: 'Paperback', pages: '320' },
    'deathly-fates-tesia-tesia': { genre: 'Young Adult Fantasy', publisher: 'Independent', language: 'English', format: 'Paperback', pages: '320' },
    'pride-and-prejudice-jane-austen': { genre: 'Classic Romance', publisher: 'Penguin Classics', language: 'English', format: 'Paperback', pages: '432' },
    'the-spanish-love-deception-elena-armes': { genre: 'Romantic Comedy', publisher: 'Atria Books', language: 'English', format: 'Paperback', pages: '480' },
    'the-seven-husbands-of-evelyn-hugo-taylor-jenkins-reid': { genre: 'Historical Fiction', publisher: 'Atria Books', language: 'English', format: 'Paperback', pages: '400' },
    'gone-girl-gillian-flynn': { genre: 'Thriller', publisher: 'Crown Publishing', language: 'English', format: 'Paperback', pages: '432' },
    'the-way-of-kings-brandon-sanderson': { genre: 'Epic Fantasy', publisher: 'Tor Books', language: 'English', format: 'Hardcover', pages: '1007' },
    'vampire-diaries-l-j-smith': { genre: 'Paranormal Romance', publisher: 'HarperTeen', language: 'English', format: 'Paperback', pages: '320' },
    'a-game-of-thrones-george-r-r-martin': { genre: 'Epic Fantasy', publisher: 'Bantam Books', language: 'English', format: 'Paperback', pages: '864' },
    'the-priory-of-the-orange-tree-samantha-shannon': { genre: 'Fantasy', publisher: 'Bloomsbury', language: 'English', format: 'Paperback', pages: '848' },
    'circe-madeline-miller': { genre: 'Mythological Fiction', publisher: 'Bloomsbury', language: 'English', format: 'Paperback', pages: '352' },
    'wings-of-fire-dr-a-p-j-abdul-kalam': { genre: 'Autobiography', publisher: 'Universities Press', language: 'English', format: 'Paperback', pages: '180' },
    'who-will-cry-when-you-die-robin-sharma': { genre: 'Self Help', publisher: 'Jaico Publishing House', language: 'English', format: 'Paperback', pages: '256' },
    'lionel-messi-and-the-art-of-living-andy-west': { genre: 'Sports Biography', publisher: 'Bloomsbury Sport', language: 'English', format: 'Paperback', pages: '288' },
    'stop-letting-everything-affect-you-daniel-chidiac': { genre: 'Self Help', publisher: 'Undercover Publishing', language: 'English', format: 'Paperback', pages: '220' },
    'the-girl-in-the-house-harshawardhan-rao': { genre: 'Psychological Thriller', publisher: 'Srishti Publishers', language: 'English', format: 'Paperback', pages: '224' },
    'that-night-four-friends-twenty-years-nidhi-upadhyay': { genre: 'Mystery Thriller', publisher: 'Penguin eBury Press', language: 'English', format: 'Paperback', pages: '288' },
    'the-turn-of-the-screw-henry-james': { genre: 'Gothic Horror', publisher: 'Penguin Classics', language: 'English', format: 'Paperback', pages: '160' },
    'the-crime-at-black-dudley-margery-allingham': { genre: 'Classic Mystery', publisher: 'Vintage Classics', language: 'English', format: 'Paperback', pages: '240' },
    'the-patient-in-room-18-mignon-g-eberhart': { genre: 'Classic Mystery', publisher: 'American Mystery Classics', language: 'English', format: 'Paperback', pages: '272' },
    'steve-jobs-walter-isaacson': { genre: 'Biography', publisher: 'Simon & Schuster', language: 'English', format: 'Paperback', pages: '656' },
    'queen-elisabeth-ii-hugo-vickers': { genre: 'Biography', publisher: 'Hodder & Stoughton', language: 'English', format: 'Paperback', pages: '192' },
    'korean-messiah-jonathan-cheng': { genre: 'History', publisher: 'Pegasus Books', language: 'English', format: 'Hardcover', pages: '336' },
    'the-madness-pill-justin-garson': { genre: 'Psychology', publisher: "St. Martin's Press", language: 'English', format: 'Hardcover', pages: '304' },
    'true-color-kory-stamper': { genre: 'Non-Fiction', publisher: 'Pantheon', language: 'English', format: 'Hardcover', pages: '320' },
    'the-escape-room-marissa-meyer': { genre: 'Young Adult Mystery', publisher: 'Feiwel & Friends', language: 'English', format: 'Hardcover', pages: '256' },
    'flirting-with-murder-amanda-sellet': { genre: 'Young Adult Mystery', publisher: 'Delacorte Press', language: 'English', format: 'Paperback', pages: '320' },
    'summer-official-rebekah-weatherspoon': { genre: 'Young Adult Romance', publisher: 'Penguin Workshop', language: 'English', format: 'Paperback', pages: '288' },
    'they-want-us-dead-cl-montblac': { genre: 'Young Adult Thriller', publisher: 'Titan Books', language: 'English', format: 'Paperback', pages: '320' },
    'this-could-all-go-bad-spencer-hall': { genre: 'Young Adult Fiction', publisher: 'Bloomsbury YA', language: 'English', format: 'Paperback', pages: '352' }
};

const GENRE_NOTES = {
    default: 'a carefully selected title for readers who enjoy strong storytelling and a polished reading experience',
    'Psychological Thriller': 'a tense psychological thriller built around secrets, suspicion, and a page-turning reveal',
    'Self Help': 'a practical self-help pick with clear ideas readers can apply to everyday life',
    'Contemporary Fiction': 'a thoughtful contemporary novel about choices, regret, and second chances',
    'Science Fiction': 'an imaginative science fiction adventure with big ideas and high-stakes problem solving',
    'Literary Fiction': 'a lyrical literary novel with atmosphere, emotion, and a memorable setting',
    'Romantic Thriller': 'a gripping blend of romance, obsession, and suspense',
    'Fantasy': 'an immersive fantasy read with rich world-building and dramatic stakes',
    'Young Adult Mystery': 'a fast, clever young adult mystery with clues, tension, and personality',
    'Young Adult Fantasy': 'a young adult fantasy with magic, danger, and emotional momentum',
    'Classic Romance': 'a beloved classic romance full of wit, manners, and enduring character work',
    'Romantic Comedy': 'a warm romantic comedy with sparkling tension and a satisfying slow burn',
    'Historical Fiction': 'a glamorous historical fiction story about fame, memory, and hidden truth',
    'Thriller': 'a sharp thriller designed for readers who enjoy twists and uneasy questions',
    'Epic Fantasy': 'a sweeping epic fantasy with layered politics, myth, and large-scale conflict',
    'Paranormal Romance': 'a paranormal romance full of supernatural drama and teen emotion',
    'Mythological Fiction': 'a myth-inspired novel that reimagines legend through a vivid personal voice',
    'Autobiography': 'an inspiring life story about ambition, service, and resilience',
    'Sports Biography': 'a sports biography that looks at talent, discipline, and a life shaped by football',
    'Mystery Thriller': 'a mystery thriller built around old friendships, buried memories, and danger',
    'Gothic Horror': 'a gothic classic with eerie atmosphere and psychological uncertainty',
    'Classic Mystery': 'a classic mystery for readers who love old houses, clues, and elegant suspense',
    'Biography': 'a readable biography that brings a remarkable public life into focus',
    'History': 'a historical non-fiction title that connects politics, belief, and power',
    'Psychology': 'a psychology title that explores mental health ideas with curiosity and clarity',
    'Non-Fiction': 'an informative non-fiction read with a fresh subject and accessible style',
    'Young Adult Romance': 'a bright young adult romance with summer energy and heartfelt choices',
    'Young Adult Thriller': 'a young adult thriller with urgency, danger, and quick pacing',
    'Young Adult Fiction': 'a contemporary young adult story about friendship, pressure, and growing up'
};

const REVIEW_TEMPLATES = [
    { name: 'Ananya R.', rating: 5, text: 'The book arrived in great condition, and the story kept me turning pages from the first chapter.' },
    { name: 'Rahul S.', rating: 4, text: 'A solid pick with strong pacing and a clear reason to recommend it to other readers.' },
    { name: 'Maya K.', rating: 5, text: 'Loved the cover quality, readable print, and the way this title fits the Book Haven collection.' }
];

function readStoredJson(key, fallback) {
    try {
        return JSON.parse(sessionStorage.getItem(key) || JSON.stringify(fallback));
    } catch (error) {
        return fallback;
    }
}

function normalizeProduct(product, id) {
    if (!product) return null;

    const productId = product.id || id || slugify(`${product.name}-${product.author}`);
    return {
        ...product,
        id: productId,
        name: product.name || 'Untitled Book',
        author: product.author || 'Unknown Author',
        price: Number(product.price || 0),
        image: product.image || '',
        edition: product.edition || 'Paperback',
        link: product.link || `productdetails.html?id=${encodeURIComponent(productId)}`
    };
}

function makeProductFromId(id) {
    if (!id) return null;

    const titlePart = id.split('-').slice(0, -2).join('-') || id;
    const name = titlePart
        .split('-')
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        id,
        name,
        author: 'Unknown Author',
        price: 0,
        image: 'atomichabits.jpeg',
        edition: 'Paperback',
        link: `productdetails.html?id=${encodeURIComponent(id)}`
    };
}

function buildProductFromPageOrCatalog() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const selected = normalizeProduct(readStoredJson('bookHavenSelectedProduct', null), id);
    const cards = readStoredJson('bookHavenLastProducts', []);

    if (id) {
        const catalogMatch = PRODUCT_CATALOG[id] || null;
        const selectedMatch = selected?.id === id ? selected : null;
        const sessionMatch = normalizeProduct(cards.find(item => item.id === id), id);
        const cartMatch = normalizeProduct(getCart().find(item => item.id === id), id);

        return catalogMatch || selectedMatch || sessionMatch || cartMatch || makeProductFromId(id);
    }

    if (selected) return selected;

    return {
        id: 'selected-book',
        name: 'Selected Book',
        author: 'Unknown Author',
        price: 0,
        image: '',
        edition: 'Paperback',
        link: 'productdetails.html'
    };
}

function getProductDescription(product) {
    const details = getBookDetails(product);
    const note = GENRE_NOTES[details.genre] || GENRE_NOTES.default;

    return {
        summary: `${product.name} by ${product.author} is ${note}.`,
        details: `This ${details.format || product.edition || 'book'} edition from ${details.publisher || 'Book Haven'} is listed in ${details.language || 'English'} with ${details.pages || 'varied'} pages, making it easy to compare before adding it to your cart.`
    };
}

function updateDescription(product) {
    const pane = document.getElementById('description');
    if (!pane) return;

    const description = product.description || getProductDescription(product);
    let paragraphs = pane.querySelectorAll('p');
    if (paragraphs.length < 2) {
        const secondParagraph = document.createElement('p');
        pane.appendChild(secondParagraph);
        paragraphs = pane.querySelectorAll('p');
    }

    paragraphs[0].textContent = description.summary;
    paragraphs[1].textContent = description.details;
}

function getBookDetails(product) {
    return BOOK_DETAILS[product.id] || BOOK_DETAILS[slugify(`${product.name}-${product.author}`)] || BOOK_DETAILS.default;
}

function updateBookDetails(product) {
    const pane = document.getElementById('specifications');
    if (!pane) return;

    const details = getBookDetails(product);
    const fields = [
        ['Title', product.name],
        ['Author', product.author],
        ['Genre', details.genre],
        ['Publisher', details.publisher],
        ['Format', details.format || product.edition],
        ['Pages', details.pages],
        ['Language', details.language],
        ['Price', `₹${Number(product.price || 0).toFixed(0)}`],
        ['Availability', 'In Stock']
    ];

    const list = pane.querySelector('ul') || document.createElement('ul');
    list.replaceChildren();

    fields.forEach(([label, value]) => {
        const item = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = `${label}:`;
        item.append(strong, ` ${value || 'Not available'}`);
        list.appendChild(item);
    });

    if (!list.parentElement) pane.appendChild(list);
}

function starRating(rating) {
    return '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating);
}

function getProductReviews(product) {
    const details = getBookDetails(product);
    return REVIEW_TEMPLATES.map((review, index) => ({
        ...review,
        date: ['May 4, 2026', 'April 21, 2026', 'March 18, 2026'][index],
        text: index === 1
            ? `${product.name} works well as a ${details.genre.toLowerCase()} recommendation. ${review.text}`
            : review.text
    }));
}

function updateReviews(product) {
    const pane = document.getElementById('reviews');
    if (!pane) return;

    const reviews = getProductReviews(product);
    pane.replaceChildren();

    const heading = document.createElement('h2');
    heading.textContent = 'Customer Reviews';
    pane.appendChild(heading);

    reviews.forEach(review => {
        const wrapper = document.createElement('div');
        wrapper.className = 'review';

        const info = document.createElement('div');
        info.className = 'reviewer-info';

        const name = document.createElement('span');
        name.className = 'reviewer-name';
        name.textContent = review.name;

        const rating = document.createElement('span');
        rating.className = 'review-rating';
        rating.textContent = starRating(review.rating);

        const date = document.createElement('span');
        date.className = 'review-date';
        date.textContent = review.date;

        const text = document.createElement('p');
        text.className = 'review-text';
        text.textContent = review.text;

        info.append(name, rating, date);
        wrapper.append(info, text);
        pane.appendChild(wrapper);
    });

    const viewAll = document.createElement('a');
    viewAll.href = '#';
    viewAll.className = 'view-all-reviews';
    viewAll.textContent = 'View All Reviews';
    pane.appendChild(viewAll);

    const reviewsTab = document.querySelector('[data-tab="reviews"]');
    if (reviewsTab) reviewsTab.textContent = `Reviews (${reviews.length})`;
}

function wireRelatedProducts() {
    const relatedCards = [...document.querySelectorAll('.related-product-card')];
    if (!relatedCards.length) return;

    const existingProducts = readStoredJson('bookHavenLastProducts', []);
    const relatedProducts = relatedCards.map(card => {
        const product = readProductFromCard(card);
        card.dataset.productId = product.id;
        card.tabIndex = 0;
        card.setAttribute('role', 'link');
        card.setAttribute('aria-label', `View details for ${product.name}`);
        card.style.cursor = 'pointer';
        return product;
    });

    const merged = [...existingProducts];
    relatedProducts.forEach(product => {
        const index = merged.findIndex(item => item.id === product.id);
        if (index >= 0) {
            merged[index] = product;
        } else {
            merged.push(product);
        }
    });
    sessionStorage.setItem('bookHavenLastProducts', JSON.stringify(merged));

    relatedCards.forEach(card => {
        const openDetails = () => {
            const product = readProductFromCard(card);
            const products = readStoredJson('bookHavenLastProducts', []);
            const withoutCurrent = products.filter(item => item.id !== product.id);
            sessionStorage.setItem('bookHavenLastProducts', JSON.stringify([...withoutCurrent, product]));
            rememberSelectedProduct(product);
            window.location.href = product.link;
        };

        card.addEventListener('click', openDetails);
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter') openDetails();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const product = buildProductFromPageOrCatalog();
    const title = document.querySelector('.product-name');
    const author = document.querySelector('.product-author');
    const price = document.querySelector('.product-price');
    const mainImage = document.getElementById('main-product-image');
    const breadcrumbCurrent = document.querySelector('.breadcrumbs span');

    if (title) title.textContent = product.name;
    if (author) author.textContent = `by ${product.author}`;
    if (price) price.textContent = `₹${Number(product.price || 0).toFixed(0)}`;
    if (mainImage) {
        mainImage.src = product.image || 'atomichabits.jpeg';
        mainImage.alt = product.name;
    }
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;
    updateDescription(product);
    updateBookDetails(product);
    updateReviews(product);

    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.src = product.image || 'atomichabits.jpeg';
        thumb.alt = product.name;
        thumb.addEventListener('click', () => {
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            if (mainImage) {
                mainImage.src = thumb.src;
                mainImage.alt = thumb.alt;
            }
        });
    });

    wireRelatedProducts();

    document.querySelectorAll('.tab-header').forEach(header => {
        header.addEventListener('click', () => {
            document.querySelectorAll('.tab-header').forEach(h => h.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            header.classList.add('active');
            document.getElementById(header.dataset.tab)?.classList.add('active');
        });
    });
});
