import { MongoClient } from "mongodb";

interface User {
  id: number;
  name: string;
}

let client: MongoClient; // MongoDB client instance

async function connectToDatabase() {
  if (!client) {
    // Check if the DATA_API_KEY is defined
    if (!process.env.DATA_API_KEY) {
      throw new Error("DATA_API_KEY environment variable is not set.");
    }

    // Connect to MongoDB Atlas
    const uri = process.env.DATA_API_KEY; // Use your API key here
    client = new MongoClient(uri);
    await client.connect();
  }
}

export async function GET() {
  try {
    // Connect to MongoDB Atlas if not already connected
    await connectToDatabase();

    // Retrieve users from MongoDB collection
    const db = client.db("Next13");
    const collection = db.collection("Users");
    const users = await collection.find().toArray();

    return new Response(JSON.stringify(users));
  } catch (err) {
    const error = err as Error;
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    // Connect to MongoDB Atlas if not already connected
    await connectToDatabase();

    // Get the data from the request body
    // const data = await request.json();
    const data={name: ''}

    // Retrieve the MongoDB collection and insert the data
    const db = client.db("Next13");
    const collection = db.collection("Users");
    const result = await collection.insertOne(data);

    // return new Response(JSON.stringify(result.ops), { status: 201 });
  } catch (err) {
    // const error = err as Error;
    // return new Response(JSON.stringify({ error: error.message }), {
    //   status: 500,
    // });
  }
}
