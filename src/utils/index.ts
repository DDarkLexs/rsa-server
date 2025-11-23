import * as fs from "fs";
import * as path from "path";

export const privateKey = fs.readFileSync(path.join(__dirname, "../keys/private.pem"), "utf8");
export const publicKey = fs.readFileSync(path.join(__dirname, "../keys/public.pem"), "utf8");
