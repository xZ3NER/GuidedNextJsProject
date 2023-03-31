// API ROUTES (allow you to build your custom api endpoints to your ddbb)
// We will define functions which contains server-side code (never expose to the client)

import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;

    let statusCode: number;
    let resJson: { message: string };

    try {
      // You can leave your connect here because any API ROUTES code will NEVER end up in the client side
      const client = await MongoClient.connect(
        "mongodb+srv://default-user:lKBBiv0n0KBGcGxi@cluster0.gyhfg.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupCollections = db.collection("meetups");

      const result = await meetupCollections.insertOne(data);

      // You can handle error with try catch and res.status(404) for example
      console.log(result);

      statusCode = 201;
      resJson = { message: "Meetup inserted!" };

      client.close();
    } catch (error) {
      statusCode = 404;
      resJson = { message: "Insert failed!" };
    }

    // Send back a status code, and a json with a message (the json content it's up to us)
    res.status(statusCode).json({ ...resJson });
  }
};

export default handler;
