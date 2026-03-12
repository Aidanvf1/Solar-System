const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('solarSystem');
const userCollection = db.collection('user');
const dateCollection = db.collection('savedDate');

// test the connection on startup
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

// user functions
function getUser(username) {
  return userCollection.findOne({ username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUserToken(username, token) {
  await userCollection.updateOne({ username }, { $set: { token } });
}

async function removeUserToken(token) {
  await userCollection.updateOne({ token }, { $unset: { token: '' } });
}

// saved dates functions
async function getSavedDates(username) {
  const cursor = dateCollection.find({ username }, { sort: { _id: -1 }, limit: 5 });
  return cursor.toArray();
}

async function addSavedDate(username, dateEntry) {
  await dateCollection.insertOne({ username, ...dateEntry });

  // count total for this user and delete oldest if over limit
  const count = await dateCollection.countDocuments({ username });
  if (count > 5) {
    const oldest = await dateCollection
      .find({ username })
      .sort({ _id: 1 })
      .limit(count - 5)
      .toArray();
    const ids = oldest.map((d) => d._id);
    await dateCollection.deleteMany({ _id: { $in: ids } });
  }

  return getSavedDates(username);
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUserToken,
  removeUserToken,
  getSavedDates,
  addSavedDate,
};
