const { MongoClient, ObjectId } = require('mongodb');

const url = process.env.MONGODB_URL || 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const dbName = 'users';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function setupDatabase() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB server');

        const db = client.db(dbName);

        // Details collection setup
        const detailsCollection = db.collection('details');
        await detailsCollection.createIndex({ email: 1 }, { unique: true });

        // Example documents for the details collection
        const user1 = {
            _id: new ObjectId(),
            email: "user1@example.com",
            name: "User One",
            password: "hashed_password1"
        };
        const user2 = {
            _id: new ObjectId(),
            email: "user2@example.com",
            name: "User Two",
            password: "hashed_password2"
        };

        // Insert documents into the details collection
        await detailsCollection.insertMany([user1, user2]);

        // Reset tokens collection setup
        const resetTokensCollection = db.collection('reset_tokens');
        await resetTokensCollection.createIndex({ user_id: 1, token: 1 }, { unique: true });

        // Example documents for the reset tokens collection
        const token1 = {
            token: "unique_token_1",
            created_at: new Date().toISOString(),
            expires_at: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours later
            user_id: user1._id
        };
        const token2 = {
            token: "unique_token_2",
            created_at: new Date().toISOString(),
            expires_at: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours later
            user_id: user2._id
        };

        // Insert documents into the reset tokens collection
        await resetTokensCollection.insertMany([token1, token2]);

        console.log('Documents inserted successfully');
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

module.exports = setupDatabase;
