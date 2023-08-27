import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64c29f8112c0b45f5088");

export const account = new Account(client);

// DB Ref
export const databases = new Databases(client);
