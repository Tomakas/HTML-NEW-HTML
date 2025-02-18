// data/data.js

export function getTopics() {
  return [
    // Jídlo
    {
      name: 'Food',
      levels: [
        // Úroveň 1
        {
          levelNumber: 1,
          words: [
            { czech: 'jídlo', english: 'food', phonetic: 'fuːd' },
            { czech: 'maso', english: 'meat', phonetic: 'miːt' },
            { czech: 'vejce', english: 'egg', phonetic: 'ɛg' },
            { czech: 'cukr', english: 'sugar', phonetic: 'ˈʃʊgər' },
            { czech: 'rýže', english: 'rice', phonetic: 'raɪs' },
            { czech: 'snídaně', english: 'breakfast', phonetic: 'ˈbrɛkfəst' },
            { czech: 'oběd', english: 'lunch', phonetic: 'lʌntʃ' },
            { czech: 'večeře', english: 'dinner', phonetic: 'ˈdɪnər' },
            { czech: 'máslo', english: 'butter', phonetic: 'ˈbʌtər' },
            { czech: 'lžíce', english: 'spoon', phonetic: 'spuːn' },
            { czech: 'vidlička', english: 'fork', phonetic: 'fɔːrk' },
            { czech: 'svačina', english: 'snack', phonetic: 'snæk' },
            { czech: 'ovoce', english: 'fruit', phonetic: 'fruːt' },
            { czech: 'těstoviny', english: 'pasta', phonetic: 'ˈpæstə' },
            { czech: 'sůl', english: 'salt', phonetic: 'sɔːlt' },
            { czech: 'vařit', english: 'cook', phonetic: 'kʊk' },
            { czech: 'koření', english: 'spices', phonetic: 'ˈspaɪsɪz' },
            { czech: 'talíř', english: 'plate', phonetic: 'pleɪt' },
            { czech: 'čaj', english: 'tea', phonetic: 'tiː' },
            { czech: 'káva', english: 'coffee', phonetic: 'ˈkɔːfi' },
          ],
        },
        // Úroveň 2
        {
          levelNumber: 2,
          words: [
            { czech: 'polévka', english: 'soup', phonetic: 'suːp' },
            { czech: 'salát', english: 'salad', phonetic: 'ˈsæləd' },
            { czech: 'jablko', english: 'apple', phonetic: 'ˈæpl' },
            { czech: 'banán', english: 'banana', phonetic: 'bəˈnænə' },
            { czech: 'mrkev', english: 'carrot', phonetic: 'ˈkærət' },
            { czech: 'rajče', english: 'tomato', phonetic: 'təˈmeɪtoʊ' },
            { czech: 'cibule', english: 'onion', phonetic: 'ˈʌnjən' },
            { czech: 'brambory', english: 'potatoes', phonetic: 'pəˈteɪtoʊz' },
            { czech: 'šunka', english: 'ham', phonetic: 'hæm' },
            { czech: 'nůž', english: 'knife', phonetic: 'naɪf' },
            { czech: 'sýr', english: 'cheese', phonetic: 'tʃiːz' },
            { czech: 'ryba', english: 'fish', phonetic: 'fɪʃ' },
            { czech: 'klobása', english: 'sausage', phonetic: 'ˈsɔːsɪdʒ' },
            { czech: 'slanina', english: 'bacon', phonetic: 'ˈbeɪkən' },
            { czech: 'pivo', english: 'beer', phonetic: 'bɪr' },
            { czech: 'víno', english: 'wine', phonetic: 'waɪn' },
            { czech: 'jogurt', english: 'yogurt', phonetic: 'ˈjoʊgərt' },
            { czech: 'džus', english: 'juice', phonetic: 'dʒuːs' },
            { czech: 'péct', english: 'bake', phonetic: 'beɪk' },
            { czech: 'kukuřice', english: 'corn', phonetic: 'kɔːrn' },
          ],
        },
        // Úroveň 3
        {
          levelNumber: 3,
          words: [
            { czech: 'jíst', english: 'eat', phonetic: 'iːt' },
            { czech: 'jahoda', english: 'strawberry', phonetic: 'ˈstrɔːbəri' },
            { czech: 'chleba', english: 'bread', phonetic: 'bred' },
            { czech: 'třešeň', english: 'cherry', phonetic: 'ˈtʃɛri' },
            { czech: 'pepř', english: 'pepper', phonetic: 'ˈpɛpər' },
            { czech: 'hrášek', english: 'pea', phonetic: 'piː' },
            { czech: 'fazole', english: 'beans', phonetic: 'biːnz' },
            { czech: 'voda', english: 'water', phonetic: 'ˈwɔːtər' },
            { czech: 'hruška', english: 'pear', phonetic: 'pɛr' },
            { czech: 'zelenina', english: 'vegetable', phonetic: 'ˈvɛdʒtəbəl' },
            { czech: 'okurka', english: 'cucumber', phonetic: 'ˈkjuːkʌmbər' },
            { czech: 'omáčka', english: 'sauce', phonetic: 'sɔːs' },
            { czech: 'borůvka', english: 'blueberry', phonetic: 'ˈbluːbɛri' },
            { czech: 'med', english: 'honey', phonetic: 'ˈhʌni' },
            { czech: 'citrón', english: 'lemon', phonetic: 'ˈlɛmən' },
            { czech: 'dezert', english: 'dessert', phonetic: 'dɪˈzɜːrt' },
            { czech: 'sklenice', english: 'glass', phonetic: 'ɡlæs' },
            { czech: 'hrnek', english: 'mug', phonetic: 'mʌɡ' },
            { czech: 'česnek', english: 'garlic', phonetic: 'ˈɡɑrlɪk' },
            { czech: 'hlad', english: 'hunger', phonetic: 'ˈhʌŋɡər' },
          ],
        },
      ],
    },
    // Nature
    {
      name: 'Nature',
      levels: [
        {
          levelNumber: 1,
          words: [
            { czech: 'strom', english: 'tree', phonetic: 'triː' },
            { czech: 'květina', english: 'flower', phonetic: 'ˈflaʊər' },
            { czech: 'hora', english: 'mountain', phonetic: 'ˈmaʊntən' },
            { czech: 'jezero', english: 'lake', phonetic: 'leɪk' },
            { czech: 'řeka', english: 'river', phonetic: 'ˈrɪvər' },
            { czech: 'les', english: 'forest', phonetic: 'ˈfɔːrɪst' },
            { czech: 'kořen', english: 'root', phonetic: 'ruːt' },
            { czech: 'oceán', english: 'ocean', phonetic: 'ˈoʊʃən' },
            { czech: 'písek', english: 'sand', phonetic: 'sænd' },
            { czech: 'skála', english: 'rock', phonetic: 'rɑːk' },
            { czech: 'obloha', english: 'sky', phonetic: 'skaɪ' },
            { czech: 'sníh', english: 'snow', phonetic: 'snoʊ' },
            { czech: 'mlha', english: 'fog', phonetic: 'fɒɡ' },
            { czech: 'země', english: 'earth', phonetic: 'ɜːrθ' },
            { czech: 'bouřka', english: 'storm', phonetic: 'stɔːrm' },
            { czech: 'slunce', english: 'sun', phonetic: 'sʌn' },
            { czech: 'hvězda', english: 'star', phonetic: 'stɑːr' },
            { czech: 'tráva', english: 'grass', phonetic: 'ɡræs' },
            { czech: 'listí', english: 'leaves', phonetic: 'liːvz' },
            { czech: 'poušť', english: 'desert', phonetic: 'ˈdezərt' },
          ],
        },
        {
          levelNumber: 2,
          words: [
            { czech: 'moře', english: 'sea', phonetic: 'siː' },
            { czech: 'kopec', english: 'hill', phonetic: 'hɪl' },
            { czech: 'dřevo', english: 'wood', phonetic: 'wʊd' },
            { czech: 'vítr', english: 'wind', phonetic: 'wɪnd' },
            { czech: 'park', english: 'park', phonetic: 'pɑːrk' },
            { czech: 'uhlí', english: 'coal', phonetic: 'koʊl' },
            { czech: 'vesmír', english: 'universe', phonetic: 'ˈjuːnɪvɜːrs' },
            { czech: 'měsíc', english: 'moon', phonetic: 'muːn' },
            { czech: 'led', english: 'ice', phonetic: 'aɪs' },
            { czech: 'sever', english: 'north', phonetic: 'nɔːrθ' },
            { czech: 'jeskyně', english: 'cave', phonetic: 'keɪv' },
            { czech: 'jih', english: 'south', phonetic: 'saʊθ' },
            { czech: 'prales', english: 'rainforest', phonetic: 'ˈreɪnfɔːrɪst' },
            { czech: 'západ slunce', english: 'sunset', phonetic: 'ˈsʌnsɛt' },
            { czech: 'východ slunce', english: 'sunrise', phonetic: 'ˈsʌnˌraɪz' },
            { czech: 'vzduch', english: 'air', phonetic: 'ɛr' },
            { czech: 'východ', english: 'east', phonetic: 'iːst' },
            { czech: 'západ', english: 'west', phonetic: 'wɛst' },
            { czech: 'prach', english: 'dust', phonetic: 'dʌst' },
            { czech: 'železo', english: 'iron', phonetic: 'ˈaɪərn' },
          ],
        },
        {
          levelNumber: 3,
          words: [
            { czech: 'tsunami', english: 'tsunami', phonetic: 'tsuːˈnɑːmi' },
            { czech: 'blesk', english: 'lightning', phonetic: 'ˈlaɪtnɪŋ' },
            { czech: 'hrom', english: 'thunder', phonetic: 'ˈθʌndər' },
            { czech: 'déšť', english: 'rain', phonetic: 'reɪn' },
            { czech: 'ledovec', english: 'glacier', phonetic: 'ˈɡleɪʃər' },
            { czech: 'tma', english: 'darkness', phonetic: 'ˈdɑːrk.nəs' },
            { czech: 'sněhulák', english: 'snowman', phonetic: 'ˈsnoʊmæn' },
            { czech: 'výška', english: 'altitude', phonetic: 'ˈæltɪtjuːd' },
            { czech: 'dálka', english: 'distance', phonetic: 'ˈdɪstəns' },
            { czech: 'rychlost', english: 'speed', phonetic: 'spiːd' },
            { czech: 'důl', english: 'mine', phonetic: 'maɪn' },
            { czech: 'bylina', english: 'herb', phonetic: 'hɜːrb' },
            { czech: 'ostrov', english: 'island', phonetic: 'ˈaɪlənd' },
            { czech: 'diamant', english: 'diamond', phonetic: 'ˈdaɪəmənd' },
            { czech: 'zlato', english: 'gold', phonetic: 'ɡoʊld' },
            { czech: 'stříbro', english: 'silver', phonetic: 'ˈsɪlvər' },
            { czech: 'povodeň', english: 'flood', phonetic: 'flʌd' },
            { czech: 'zemětřesení', english: 'earthquake', phonetic: 'ˈɜːrθkweɪk' },
            { czech: 'metr', english: 'meter', phonetic: 'ˈmiːtər' },
            { czech: 'světlo', english: 'light', phonetic: 'laɪt' },
          ],
        },
      ],
    },
    // Animals
    {
      name: 'Animals',
      levels: [
        // Level 1
        {
          levelNumber: 1,
          words: [
            { czech: 'pes', english: 'dog', phonetic: 'dɔɡ' },
            { czech: 'kočka', english: 'cat', phonetic: 'kæt' },
            { czech: 'kůň', english: 'horse', phonetic: 'hɔːrs' },
            { czech: 'kráva', english: 'cow', phonetic: 'kaʊ' },
            { czech: 'ovce', english: 'sheep', phonetic: 'ʃiːp' },
            { czech: 'prase', english: 'pig', phonetic: 'pɪɡ' },
            { czech: 'králík', english: 'rabbit', phonetic: 'ˈræbɪt' },
            { czech: 'krocan', english: 'turkey', phonetic: 'ˈtɜːrki' },
            { czech: 'pták', english: 'bird', phonetic: 'bɜːrd' },
            { czech: 'osel', english: 'donkey', phonetic: 'ˈdɒŋki' }, // Nahrazeno "ryba"
            { czech: 'myš', english: 'mouse', phonetic: 'maʊs' },
            { czech: 'kachna', english: 'duck', phonetic: 'dʌk' },
            { czech: 'slepice', english: 'hen', phonetic: 'hɛn' },
            { czech: 'husa', english: 'goose', phonetic: 'ɡuːs' },
            { czech: 'želva', english: 'turtle', phonetic: 'ˈtɜːrtl' },
            { czech: 'had', english: 'snake', phonetic: 'sneɪk' },
            { czech: 'žába', english: 'frog', phonetic: 'frɒɡ' },
            { czech: 'motýl', english: 'butterfly', phonetic: 'ˈbʌtərflaɪ' },
            { czech: 'beruška', english: 'ladybug', phonetic: 'ˈleɪdibʌɡ' },
            { czech: 'šváb', english: 'cockroach', phonetic: 'ˈkɒkroʊʧ' }, // Přidáno
          ],
        },
        // Level 2
        {
          levelNumber: 2,
          words: [
            { czech: 'lev', english: 'lion', phonetic: 'ˈlaɪən' },
            { czech: 'tygr', english: 'tiger', phonetic: 'ˈtaɪɡər' },
            { czech: 'slon', english: 'elephant', phonetic: 'ˈɛlɪfənt' },
            { czech: 'žirafa', english: 'giraffe', phonetic: 'dʒɪˈræf' },
            { czech: 'zebra', english: 'zebra', phonetic: 'ˈziːbrə' },
            { czech: 'opice', english: 'monkey', phonetic: 'ˈmʌŋki' },
            { czech: 'medvěd', english: 'bear', phonetic: 'bɛər' },
            { czech: 'vlk', english: 'wolf', phonetic: 'wʊlf' },
            { czech: 'včela', english: 'bee', phonetic: 'biː' },
            { czech: 'veverka', english: 'squirrel', phonetic: 'ˈskwɜːrəl' },
            { czech: 'jelen', english: 'deer', phonetic: 'dɪr' },
            { czech: 'sova', english: 'owl', phonetic: 'aʊl' },
            { czech: 'orel', english: 'eagle', phonetic: 'ˈiːɡl' },
            { czech: 'tučňák', english: 'penguin', phonetic: 'ˈpɛŋɡwɪn' },
            { czech: 'papoušek', english: 'parrot', phonetic: 'ˈpærət' },
            { czech: 'krokodýl', english: 'crocodile', phonetic: 'ˈkrɒkədaɪl' },
            { czech: 'žralok', english: 'shark', phonetic: 'ʃɑːrk' },
            { czech: 'delfín', english: 'dolphin', phonetic: 'ˈdɒlfɪn' },
            { czech: 'losos', english: 'salmon', phonetic: 'ˈsæmən' },
            { czech: 'žížala', english: 'earthworm', phonetic: 'ˈɜːθwɜːrm' },
          ],
        },
        // Level 3
        {
          levelNumber: 3,
          words: [
            { czech: 'ježek', english: 'hedgehog', phonetic: 'ˈhɛdʒhɒɡ' },
            { czech: 'liška', english: 'fox', phonetic: 'fɒks' },
            { czech: 'velbloud', english: 'camel', phonetic: 'ˈkæməl' },
            { czech: 'panda', english: 'panda', phonetic: 'ˈpændə' },
            { czech: 'koza', english: 'goat', phonetic: 'ɡoʊt' },
            { czech: 'červ', english: 'worm', phonetic: 'wɜːrm' },
            { czech: 'pavouk', english: 'spider', phonetic: 'ˈspaɪdər' },
            { czech: 'velryba', english: 'whale', phonetic: 'weɪl' },
            { czech: 'hroch', english: 'hippo', phonetic: 'ˌhɪpə' },
            { czech: 'vosa', english: 'wasp', phonetic: 'wɒsp' },
            { czech: 'rhino', english: 'rhino', phonetic: 'ˈraɪnoʊ' },
            { czech: 'kuře', english: 'chicken', phonetic: 'ˈtʃɪkɪn' },
            { czech: 'krysa', english: 'rat', phonetic: 'ræt' },
            { czech: 'netopýr', english: 'bat', phonetic: 'bæt' },
            { czech: 'křeček', english: 'hamster', phonetic: 'ˈhæmstər' },
            { czech: 'býk', english: 'bull', phonetic: 'bʊl' },
            { czech: 'chobotnice', english: 'octopus', phonetic: 'ˈɒktəpəs' },
            { czech: 'světluška', english: 'firefly', phonetic: 'ˈfaɪərflaɪ' }, // Nahrazeno "jelen"
            { czech: 'tuňák', english: 'tuna', phonetic: 'ˈtuːnɑːk' }, // Přidáno
            { czech: 'mravenec', english: 'ant', phonetic: 'ænt' }, // Přidáno
          ],
        },
      ],
    },

    // Numbers and Colors
    {
      name: 'Numbers',
      levels: [
        // Level 1
        {
          levelNumber: 1,
          words: [
            // Basic Numbers 1-10
            { czech: 'jedna', english: 'one', phonetic: 'wʌn' },
            { czech: 'dvě', english: 'two', phonetic: 'tuː' },
            { czech: 'tři', english: 'three', phonetic: 'θriː' },
            { czech: 'čtyři', english: 'four', phonetic: 'fɔːr' },
            { czech: 'pět', english: 'five', phonetic: 'faɪv' },
            { czech: 'šest', english: 'six', phonetic: 'sɪks' },
            { czech: 'sedm', english: 'seven', phonetic: 'ˈsɛvən' },
            { czech: 'osm', english: 'eight', phonetic: 'eɪt' },
            { czech: 'devět', english: 'nine', phonetic: 'naɪn' },
            { czech: 'deset', english: 'ten', phonetic: 'tɛn' },
            { czech: 'červená', english: 'red', phonetic: 'rɛd' },
            { czech: 'modrá', english: 'blue', phonetic: 'bluː' },
            { czech: 'zelená', english: 'green', phonetic: 'ɡriːn' },
            { czech: 'žlutá', english: 'yellow', phonetic: 'ˈjɛloʊ' },
            { czech: 'černá', english: 'black', phonetic: 'blæk' },
            { czech: 'bílá', english: 'white', phonetic: 'waɪt' },
            { czech: 'oranžová', english: 'orange', phonetic: 'ˈɔːrɪndʒ' },
            { czech: 'fialová', english: 'purple', phonetic: 'ˈpɜːrpəl' },
            { czech: 'růžová', english: 'pink', phonetic: 'pɪŋk' },
            { czech: 'hnědá', english: 'brown', phonetic: 'braʊn' },
          ],
        },
        // Level 2
        {
          levelNumber: 2,
          words: [
            { czech: 'jedenáct', english: 'eleven', phonetic: 'ɪˈlɛvən' },
            { czech: 'dvanáct', english: 'twelve', phonetic: 'twɛlv' },
            { czech: 'třináct', english: 'thirteen', phonetic: 'ˈθɜːrˈtiːn' },
            { czech: 'čtrnáct', english: 'fourteen', phonetic: 'ˈfɔːrˈtiːn' },
            { czech: 'patnáct', english: 'fifteen', phonetic: 'ˈfɪfˈtiːn' },
            { czech: 'šestnáct', english: 'sixteen', phonetic: 'ˈsɪksˈtiːn' },
            { czech: 'sedmnáct', english: 'seventeen', phonetic: 'ˈsɛvənˈtiːn' },
            { czech: 'devatenáct', english: 'nineteen', phonetic: 'naɪnˈtiːn' },
            { czech: 'dvacet', english: 'twenty', phonetic: 'ˈtwɛnti' },
            { czech: 'dvacet pět', english: 'twenty-five', phonetic: 'ˈtwɛnti faɪv' },
            { czech: 'první', english: 'first', phonetic: 'fɜːrst' },
            { czech: 'druhý', english: 'second', phonetic: 'ˈsɛkənd' },
            { czech: 'třetí, třetina', english: 'third', phonetic: 'θɜːrd' },
            { czech: 'nula', english: 'zero', phonetic: 'ˈzɪroʊ' },
            { czech: 'čtvrtina', english: 'quarter', phonetic: 'ˈkwɔːrtər' },
            { czech: 'polovina', english: 'half', phonetic: 'hæf' },
            { czech: 'neviditelný', english: 'invisible', phonetic: 'ɪnˈvɪzəbl' },
            { czech: 'šedá', english: 'gray', phonetic: 'ɡreɪ' },
            { czech: 'tmavě modrá', english: 'dark blue', phonetic: 'dɑːrk bluː' },
            { czech: 'světle žlutá', english: 'light yellow', phonetic: 'laɪt ˈjɛloʊ' },
          ],
        },
        // Level 3
        {
          levelNumber: 3,
          words: [
            { czech: 'třicet', english: 'thirty', phonetic: 'ˈθɜːrti' },
            { czech: 'čtyřicet', english: 'forty', phonetic: 'ˈfɔːrti' },
            { czech: 'padesát', english: 'fifty', phonetic: 'ˈfɪfti' },
            { czech: 'šedesát', english: 'sixty', phonetic: 'ˈsɪksti' },
            { czech: 'sedmdesát', english: 'seventy', phonetic: 'ˈsɛvənti' },
            { czech: 'osmdesát', english: 'eighty', phonetic: 'ˈeɪti' },
            { czech: 'devadesát', english: 'ninety', phonetic: 'ˈnaɪnti' },
            { czech: 'sto', english: 'hundred', phonetic: 'ˈhʌndrəd' },
            { czech: 'sto jedna', english: 'one hundred and one', phonetic: 'wʌn ˈhʌndrəd ənd wʌn' },
            { czech: 'sto deset', english: 'one hundred and ten', phonetic: 'wʌn ˈhʌndrəd ənd tɛn' },
            { czech: 'zlatá', english: 'golden', phonetic: 'ˈɡoʊldən' },
            { czech: 'metalíza', english: 'metallic', phonetic: 'məˈtælɪk' },
            { czech: 'dvě stě', english: 'two hundred', phonetic: 'tuː ˈhʌndrəd' },
            { czech: 'tři sta', english: 'three hundred', phonetic: 'θriː ˈhʌndrəd' },
            { czech: 'pět set', english: 'five hundred', phonetic: 'faɪv ˈhʌndrəd' },
            { czech: 'osm set', english: 'eight hundred', phonetic: 'eɪt ˈhʌndrəd' },
            { czech: 'tisíc', english: 'thousand', phonetic: 'ˈθaʊzənd' },
            { czech: 'deset tisíc', english: 'ten thousand', phonetic: 'tɛn ˈθaʊzənd' },
            { czech: 'milion', english: 'million', phonetic: 'ˈmɪljən' },
            { czech: 'duha', english: 'rainbow', phonetic: 'ˈreɪnboʊ' },
          ],
        },
      ],
    },

    // Home
    {
      name: 'Home',
      levels: [
        // Level 1
        {
          levelNumber: 1,
          words: [
            { czech: 'dům', english: 'house', phonetic: 'haʊs' },
            { czech: 'byt', english: 'apartment', phonetic: 'əˈpɑːrtmənt' },
            { czech: 'pokoj', english: 'room', phonetic: 'ruːm' },
            { czech: 'kuchyň', english: 'kitchen', phonetic: 'ˈkɪtʃən' },
            { czech: 'koupelna', english: 'bathroom', phonetic: 'ˈbæθruːm' },
            { czech: 'obývák', english: 'living room', phonetic: 'ˈlɪvɪŋ ruːm' },
            { czech: 'ložnice', english: 'bedroom', phonetic: 'ˈbɛd ruːm' },
            { czech: 'trouba', english: 'oven', phonetic: 'ˈʌvən' },
            { czech: 'zahrada', english: 'garden', phonetic: 'ˈɡɑːrdən' },
            { czech: 'okno', english: 'window', phonetic: 'ˈwɪndoʊ' },
            { czech: 'dveře', english: 'door', phonetic: 'dɔːr' },
            { czech: 'stůl', english: 'table', phonetic: 'ˈteɪbl' },
            { czech: 'židle', english: 'chair', phonetic: 'tʃɛər' },
            { czech: 'postel', english: 'bed', phonetic: 'bɛd' },
            { czech: 'křeslo', english: 'armchair', phonetic: 'ˈɑːrmtʃɛər' },
            { czech: 'televize', english: 'television', phonetic: 'ˈtɛləˌvɪʒən' },
            { czech: 'zámek', english: 'castle', phonetic: 'ˈkæsəl' },
            { czech: 'domov', english: 'home', phonetic: 'hoʊm' },
            { czech: 'bezdomovec', english: 'homeless', phonetic: 'ˈhoʊmləs' },
            { czech: 'obrázek', english: 'picture', phonetic: 'ˈpɪktʃər' },
          ],
        },
        // Level 2
        {
          levelNumber: 2,
          words: [
            { czech: 'strop', english: 'ceiling', phonetic: 'ˈsiːlɪŋ' },
            { czech: 'podlaha', english: 'floor', phonetic: 'flɔːr' },
            { czech: 'stěna', english: 'wall', phonetic: 'wɔːl' },
            { czech: 'zámek', english: 'lock', phonetic: 'lɒk' },
            { czech: 'zrcadlo', english: 'mirror', phonetic: 'ˈmɪrər' },
            { czech: 'koberec', english: 'carpet', phonetic: 'ˈkɑːrpɪt' },
            { czech: 'záclona', english: 'curtain', phonetic: 'ˈkɜːrtən' },
            { czech: 'lampa', english: 'lamp', phonetic: 'læmp' },
            { czech: 'sporák', english: 'stove', phonetic: 'stoʊv' },
            { czech: 'lednička', english: 'refrigerator', phonetic: 'rɪˈfrɪdʒəˌreɪtər' },
            { czech: 'mikrovlnka', english: 'microwave', phonetic: 'ˈmaɪkrəˌweɪv' },
            { czech: 'myčka', english: 'dishwasher', phonetic: 'ˈdɪʃˌwɑːʃər' },
            { czech: 'komín', english: 'chimney', phonetic: 'ˈtʃɪməni' },
            { czech: 'garáž', english: 'garage', phonetic: 'ɡəˈrɑːʒ' },
            { czech: 'terasa', english: 'terrace', phonetic: 'ˈtɛrəs' },
            { czech: 'topení', english: 'heating', phonetic: 'ˈhiːtɪŋ' },
            { czech: 'bazén', english: 'pool', phonetic: 'puːl' },
            { czech: 'sprcha', english: 'shower', phonetic: 'ˈʃaʊər' },
            { czech: 'záchod', english: 'toilet', phonetic: 'ˈtɔɪlɪt' },
            { czech: 'pohovka', english: 'sofa', phonetic: 'ˈsoʊfə' },
          ],
        },
        // Level 3
        {
          levelNumber: 3,
          words: [
            { czech: 'schody', english: 'stairs', phonetic: 'stɛərz' },
            { czech: 'brána', english: 'gate', phonetic: 'ɡeɪt' },
            { czech: 'vana', english: 'bathtub', phonetic: 'ˈbæθtʌb' },
            { czech: 'vchod', english: 'entrance', phonetic: 'ˈɛntrəns' },
            { czech: 'nábytek', english: 'furniture', phonetic: 'ˈfɜːrnɪtʃər' },
            { czech: 'polštář', english: 'pillow', phonetic: 'ˈpɪloʊ' },
            { czech: 'deka', english: 'blanket', phonetic: 'ˈblæŋkɪt' },
            { czech: 'větrák', english: 'fan', phonetic: 'fæn' },
            { czech: 'dřez', english: 'sink', phonetic: 'sɪŋk' },
            { czech: 'pračka', english: 'washing machine', phonetic: 'ˈwɒʃɪŋ məˌʃiːn' },
            { czech: 'bydlet', english: 'live', phonetic: 'lɪv' },
            { czech: 'osvětlení', english: 'lighting', phonetic: 'ˈlaɪtɪŋ' },
            { czech: 'střecha', english: 'roof', phonetic: 'ruːf' },
            { czech: 'sklep', english: 'cellar', phonetic: 'ˈsɛlər' },
            { czech: 'stavět', english: 'build', phonetic: 'bɪld' },
            { czech: 'spát', english: 'sleep', phonetic: 'sliːp' },
            { czech: 'hodiny', english: 'clock', phonetic: 'klɑːk' },
            { czech: 'soused', english: 'neighbor', phonetic: 'ˈneɪbər' },
            { czech: 'uklízet', english: 'clean', phonetic: 'kliːn' },
            { czech: 'stěhovat', english: 'move', phonetic: 'muːv' },
          ],
        },
      ],
    },

    // Travel
    {
      name: 'Travel',
      levels: [
        // Level 1
        {
          levelNumber: 1,
          words: [
            { czech: 'auto', english: 'car', phonetic: 'kɑːr' },
            { czech: 'vlak', english: 'train', phonetic: 'treɪn' },
            { czech: 'letadlo', english: 'plane', phonetic: 'pleɪn' },
            { czech: 'loď', english: 'boat', phonetic: 'boʊt' },
            { czech: 'vlakové nádraží', english: 'station', phonetic: 'ˈsteɪʃən' },
            { czech: 'letecké nádraží', english: 'airport', phonetic: 'ˈɛrˌpɔːrt' },
            { czech: 'cestovní pas', english: 'passport', phonetic: 'ˈpæspɔːrt' },
            { czech: 'vízum', english: 'visa', phonetic: 'ˈviːzə' },
            { czech: 'mapa', english: 'map', phonetic: 'mæp' },
            { czech: 'cesta', english: 'road', phonetic: 'roʊd' },
          ],
        },
        // Level 2
        {
          levelNumber: 2,
          words: [
            { czech: 'letiště', english: 'terminal', phonetic: 'ˈtɜːrmənəl' },
            { czech: 'jízdenka', english: 'ticket', phonetic: 'ˈtɪkɪt' },
            { czech: 'palubní vstupenka', english: 'boardingpass', phonetic: 'ˈbɔːrdɪŋpæs' },
            { czech: 'cestovní zavazadlo', english: 'luggage', phonetic: 'ˈlʌɡɪdʒ' },
            { czech: 'cestovní pojištění', english: 'insurance', phonetic: 'ɪnˈʃʊərəns' },
            { czech: 'cestovní itinerář', english: 'itinerary', phonetic: 'aɪˈtɪnərɛri' },
            { czech: 'hotel', english: 'hotel', phonetic: 'hoʊˈtɛl' },
            { czech: 'rezervace', english: 'reservation', phonetic: 'ˌrɛzərˈveɪʃən' },
            { czech: 'cestovní průvodce', english: 'guidebook', phonetic: 'ˈɡaɪdbʊk' },
            { czech: 'cestovní autobus', english: 'coach', phonetic: 'koʊtʃ' },
          ],
        },
        // Level 3
        {
          levelNumber: 3,
          words: [
            { czech: 'přestup', english: 'transfer', phonetic: 'trænsˈfɜːr' },
            { czech: 'cestovní balíček', english: 'package', phonetic: 'ˈpækɪdʒ' },
            { czech: 'cestovní sezóna', english: 'peakseason', phonetic: 'piːkˈsiːzən' },
            { czech: 'cestovní destinace', english: 'destination', phonetic: 'ˌdɛstɪˈneɪʃən' },
            { czech: 'cestovní itinerář', english: 'travelplan', phonetic: 'ˈtrævəlplæn' },
            { czech: 'cestovní dopravní prostředky', english: 'transport', phonetic: 'ˈtrænsˌpɔːrt' },
            { czech: 'cestovní průvodce', english: 'tourguide', phonetic: 'ˈtʊrˌɡaɪd' },
            { czech: 'cestovní aplikace', english: 'travelapp', phonetic: 'ˈtrævəlæp' },
            { czech: 'cestovní plány', english: 'itineraries', phonetic: 'aɪˈtɪnərɛriz' },
            { czech: 'cestovní příprava', english: 'preparation', phonetic: 'ˌprɛpəˈreɪʃən' },
          ],
        },
      ],
    },
    // Family
    {
      name: 'Family',
      levels: [
        // Level 1
        {
          levelNumber: 1,
          words: [
            { czech: 'matka', english: 'mother', phonetic: 'ˈmʌðər' },
            { czech: 'otec', english: 'father', phonetic: 'ˈfɑːðər' },
            { czech: 'bratr', english: 'brother', phonetic: 'ˈbrʌðər' },
            { czech: 'sestra', english: 'sister', phonetic: 'ˈsɪstər' },
            { czech: 'dítě', english: 'child', phonetic: 'tʃaɪld' },
            { czech: 'dcera', english: 'daughter', phonetic: 'ˈdɔːtər' },
            { czech: 'syn', english: 'son', phonetic: 'sʌn' },
            { czech: 'teta', english: 'aunt', phonetic: 'ænt' },
            { czech: 'strýc', english: 'uncle', phonetic: 'ˈʌŋkəl' },
            { czech: 'babička', english: 'grandmother', phonetic: 'ˈɡrænˌmʌðər' },
          ],
        },
        // Level 2
        {
          levelNumber: 2,
          words: [
            { czech: 'dědeček', english: 'grandfather', phonetic: 'ˈɡrænˌfɑːðər' },
            { czech: 'strýc', english: 'uncle', phonetic: 'ˈʌŋkəl' },
            { czech: 'teta', english: 'aunt', phonetic: 'ænt' },
            { czech: 'synovec', english: 'nephew', phonetic: 'ˈnɛfjuː' },
            { czech: 'neteř', english: 'niece', phonetic: 'niːs' },
            { czech: 'světec', english: 'cousin', phonetic: 'ˈkʌzn' },
            { czech: 'snoubenec', english: 'fiancé', phonetic: 'fiˈɑːnseɪ' },
            { czech: 'snoubenka', english: 'fiancée', phonetic: 'fiˈɑːnseɪ' },
            { czech: 'svatba', english: 'wedding', phonetic: 'ˈwɛdɪŋ' },
            { czech: 'rodiče', english: 'parents', phonetic: 'ˈpɛrənts' },
          ],
        },
        // Level 3
        {
          levelNumber: 3,
          words: [
            { czech: 'strýc', english: 'uncle', phonetic: 'ˈʌŋkəl' },
            { czech: 'teta', english: 'aunt', phonetic: 'ænt' },
            { czech: 'synovec', english: 'nephew', phonetic: 'ˈnɛfjuː' },
            { czech: 'neteř', english: 'niece', phonetic: 'niːs' },
            { czech: 'světec', english: 'cousin', phonetic: 'ˈkʌzn' },
            { czech: 'rodina', english: 'family', phonetic: 'ˈfæməli' },
            { czech: 'příbuzní', english: 'relatives', phonetic: 'ˈrɛləˌtɪvz' },
            { czech: 'generace', english: 'generation', phonetic: 'ˌdʒɛnəˈreɪʃən' },
            { czech: 'původ', english: 'ancestry', phonetic: 'ænˈsɛstri' },
            { czech: 'dědičnost', english: 'heritage', phonetic: 'ˈhɛrɪtɪdʒ' },
          ],
        },
      ],
    },
    // Time
    {
      name: 'Time',
      levels: [
        // Level 1
        {
          levelNumber: 1,
          words: [
            { czech: 'čas', english: 'time', phonetic: 'taɪm' },
            { czech: 'hodina', english: 'hour', phonetic: 'ˈaʊər' },
            { czech: 'minuta', english: 'minute', phonetic: 'ˈmɪnɪt' },
            { czech: 'sekunda', english: 'second', phonetic: 'ˈsɛkənd' },
            { czech: 'den', english: 'day', phonetic: 'deɪ' },
            { czech: 'týden', english: 'week', phonetic: 'wiːk' },
            { czech: 'měsíc', english: 'month', phonetic: 'mʌnθ' },
            { czech: 'rok', english: 'year', phonetic: 'jɪər' },
            { czech: 'včera', english: 'yesterday', phonetic: 'ˌjɛstərˈdeɪ' },
            { czech: 'dnes', english: 'today', phonetic: 'təˈdeɪ' },
          ],
        },
        // Level 2
        {
          levelNumber: 2,
          words: [
            { czech: 'zítra', english: 'tomorrow', phonetic: 'təˈmɒroʊ' },
            { czech: 'ráno', english: 'morning', phonetic: 'ˈmɔːrnɪŋ' },
            { czech: 'odpoledne', english: 'afternoon', phonetic: 'ˌæftərˈnuːn' },
            { czech: 'večer', english: 'evening', phonetic: 'ˈiːvnɪŋ' },
            { czech: 'noc', english: 'night', phonetic: 'naɪt' },
            { czech: 'týden', english: 'week', phonetic: 'wiːk' },
            { czech: 'měsíc', english: 'month', phonetic: 'mʌnθ' },
            { czech: 'rok', english: 'year', phonetic: 'jɪər' },
            { czech: 'stáří', english: 'age', phonetic: 'eɪdʒ' },
            { czech: 'časový pás', english: 'timezone', phonetic: 'taɪmzoʊn' },
          ],
        },
        // Level 3
        {
          levelNumber: 3,
          words: [
            { czech: 'stovka', english: 'century', phonetic: 'ˈsɛntʃəri' },
            { czech: 'milénium', english: 'millennium', phonetic: 'mɪˈlɛnɪəm' },
            { czech: 'přestupka', english: 'moment', phonetic: 'ˈmoʊmənt' },
            { czech: 'časový úsek', english: 'interval', phonetic: 'ˈɪntərvəl' },
            { czech: 'časová osa', english: 'timeline', phonetic: 'ˈtaɪmˌlaɪn' },
            { czech: 'časový limit', english: 'deadline', phonetic: 'ˈdɛdlaɪn' },
            { czech: 'časové pásmo', english: 'timeslot', phonetic: 'taɪmslɑt' },
            { czech: 'časová péče', english: 'timekeeping', phonetic: 'ˈtaɪmˌkiːpɪŋ' },
            { czech: 'časový management', english: 'timemanagement', phonetic: 'taɪmˈmænɪdʒmənt' },
            { czech: 'časový harmonogram', english: 'schedule', phonetic: 'ˈskɛdʒuːl' },
          ],
        },
      ],
    },
    // Hobbies
    {
      name: 'Hobbies',
      levels: [
        // Level 1
        {
          levelNumber: 1,
          words: [
            { czech: 'čtení', english: 'reading', phonetic: 'ˈriːdɪŋ' },
            { czech: 'psaní', english: 'writing', phonetic: 'ˈraɪtɪŋ' },
            { czech: 'malování', english: 'painting', phonetic: 'ˈpeɪntɪŋ' },
            { czech: 'fotografování', english: 'photography', phonetic: 'fəˈtɑːɡrəfi' },
            { czech: 'sport', english: 'sports', phonetic: 'spɔːrts' },
            { czech: 'hry', english: 'games', phonetic: 'ɡeɪmz' },
            { czech: 'hudba', english: 'music', phonetic: 'ˈmjuːzɪk' },
            { czech: 'tanec', english: 'dance', phonetic: 'dæns' },
            { czech: 'plavání', english: 'swimming', phonetic: 'ˈswɪmɪŋ' },
            { czech: 'cestování', english: 'traveling', phonetic: 'ˈtrævəlɪŋ' },
          ],
        },
        // Level 2
        {
          levelNumber: 2,
          words: [
            { czech: 'zpívání', english: 'singing', phonetic: 'ˈsɪŋɪŋ' },
            { czech: 'horská turistika', english: 'hiking', phonetic: 'ˈhaɪkɪŋ' },
            { czech: 'řemeslnictví', english: 'crafting', phonetic: 'ˈkræftɪŋ' },
            { czech: 'sbírání', english: 'collecting', phonetic: 'kəˈlɛktɪŋ' },
            { czech: 'zpěv', english: 'choir', phonetic: 'kwaɪər' },
            { czech: 'sběratelství', english: 'collecting', phonetic: 'kəˈlɛktɪŋ' },
            { czech: 'pečení', english: 'baking', phonetic: 'ˈbeɪkɪŋ' },
            { czech: 'pěstování', english: 'gardening', phonetic: 'ˈɡɑːrdənɪŋ' },
            { czech: 'programování', english: 'programming', phonetic: 'ˈproʊɡræmɪŋ' },
            { czech: 'hrání', english: 'playing', phonetic: 'ˈpleɪɪŋ' },
          ],
        },
        // Level 3
        {
          levelNumber: 3,
          words: [
            { czech: 'modelářství', english: 'modeling', phonetic: 'ˈmɑːdlɪŋ' },
            { czech: 'kurzy', english: 'courses', phonetic: 'ˈkɔːrsɪz' },
            { czech: 'sbírání známek', english: 'stampcollecting', phonetic: 'stæmpkəˈlɛktɪŋ' },
            { czech: 'kamarádství', english: 'friendship', phonetic: 'ˈfrɛndʃɪp' },
            { czech: 'hobby', english: 'hobby', phonetic: 'ˈhɑːbi' },
            { czech: 'kariéra', english: 'career', phonetic: 'kəˈrɪər' },
            { czech: 'relaxace', english: 'relaxing', phonetic: 'rɪˈlæksɪŋ' },
            { czech: 'meditace', english: 'meditation', phonetic: 'ˌmɛdɪˈteɪʃən' },
            { czech: 'jóga', english: 'yoga', phonetic: 'ˈjoʊɡə' },
            { czech: 'šachy', english: 'chess', phonetic: 'tʃɛs' },
          ],
        },
      ],
    },
    // People
    {
      name: 'People',
      levels: [
        // Level 1
        {
          levelNumber: 1,
          words: [
            { czech: 'člověk', english: 'person', phonetic: 'ˈpɜːrsən' },
            { czech: 'muž', english: 'man', phonetic: 'mæn' },
            { czech: 'žena', english: 'woman', phonetic: 'ˈwʊmən' },
            { czech: 'děti', english: 'children', phonetic: 'ˈtʃɪldrən' },
            { czech: 'přítel', english: 'friend', phonetic: 'frɛnd' },
            { czech: 'kolega', english: 'colleague', phonetic: 'ˈkɒliːɡ' },
            { czech: 'spolupracovník', english: 'coworker', phonetic: 'ˈkoʊˌwɜːrkər' },
            { czech: 'učitel', english: 'teacher', phonetic: 'ˈtiːtʃər' },
            { czech: 'lékař', english: 'doctor', phonetic: 'ˈdɒktər' },
            { czech: 'policista', english: 'police', phonetic: 'pəˈliːs' },
          ],
        },
        // Level 2
        {
          levelNumber: 2,
          words: [
            { czech: 'student', english: 'student', phonetic: 'ˈstudənt' },
            { czech: 'inženýr', english: 'engineer', phonetic: 'ˌɛn.dʒɪˈnɪər' },
            { czech: 'umělec', english: 'artist', phonetic: 'ˈɑːrtɪst' },
            { czech: 'herec', english: 'actor', phonetic: 'ˈæktər' },
            { czech: 'sportovec', english: 'athlete', phonetic: 'ˈæθliːt' },
            { czech: 'žurnalista', english: 'journalist', phonetic: 'ˈdʒɜːrnəlɪst' },
            { czech: 'kuchař', english: 'cook', phonetic: 'kʊk' },
            { czech: 'řidič', english: 'driver', phonetic: 'ˈdraɪvər' },
            { czech: 'vědec', english: 'scientist', phonetic: 'ˈsaɪəntɪst' },
            { czech: 'náborář', english: 'recruiter', phonetic: 'rɪˈkruːtər' },
          ],
        },
        // Level 3
        {
          levelNumber: 3,
          words: [
            { czech: 'psycholog', english: 'psychologist', phonetic: 'saɪˈkɑːlədʒɪst' },
            { czech: 'právník', english: 'lawyer', phonetic: 'ˈlɔːjər' },
            { czech: 'architekt', english: 'architect', phonetic: 'ˈɑːrkɪtɛkt' },
            { czech: 'farmář', english: 'farmer', phonetic: 'ˈfɑːrmər' },
            { czech: 'tanečník', english: 'dancer', phonetic: 'ˈdænsər' },
            { czech: 'spisovatel', english: 'writer', phonetic: 'ˈraɪtər' },
            { czech: 'designer', english: 'designer', phonetic: 'dɪˈzaɪnər' },
            { czech: 'manažer', english: 'manager', phonetic: 'ˈmænɪdʒər' },
            { czech: 'vývojář', english: 'developer', phonetic: 'dɪˈvɛləpər' },
            { czech: 'technik', english: 'technician', phonetic: 'tɛkˈnɪʃən' },
          ],
        },
      ],
    },
  ]
}
