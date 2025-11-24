import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
dotenv.config();

export const privateKey = String(process.env.PRIVATE_KEY).replace(/\\n/g, "\n");
export const publicKey = String(process.env.PUBLIC_KEY).replace(/\\n/g, "\n");
