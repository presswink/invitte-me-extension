/*
 * This template contains a HTTP function that responds
 * with a greeting when called
 *
 * Reference PARAMETERS in your functions code with:
 * `process.env.<parameter-name>`
 * Learn more about building extensions in the docs:
 * https://firebase.google.com/docs/extensions/publishers
 */

import * as functions from "firebase-functions/v1";
import {initializeApp} from "firebase-admin/app";
import { UserRecord } from "firebase-functions/v1/auth";
import { getAuth, ListUsersResult } from "firebase-admin/auth";

initializeApp(); // Initialize Firebase Admin SDK

interface IUser {
    name: string | undefined
    email: string | undefined
    user_id: string
    anniversary_date: Date
}

const baseUrl = process.env.BASE_URL ?? "https://www.invitte.me";

const projectId = functions.params.defineString("INVITTE_PROJECT_ID")
const projectSecret = functions.params.defineSecret("INVITTE_PROJECT_SECRET")

function insertUsers(users: IUser[]){
     fetch(`${baseUrl}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "project-id": projectId.value() ?? '',
                "project-secret":  projectSecret.value() ?? ''
            },
            body: JSON.stringify({
                users: users
            })
          }).then((el) => {
            console.log("request sent", users.length)
          }).catch((error) => {
            console.log(error);
          })
}

exports.syncUsers = functions.runWith({
  secrets: [projectSecret]
}).https.onRequest(
  async (req: functions.Request, res: functions.Response) => {
    let nextPageToken;
    const batchSize = 1000; // Firebase lists users in batches

    do {
      const listUsersResult: ListUsersResult = await getAuth().listUsers(batchSize, nextPageToken);
      if (listUsersResult.users.length > 0) {
        const users: IUser[] = listUsersResult.users.map((user: UserRecord) => ({
            name: user.displayName,
            email: user.email,
            user_id: user.uid,
            anniversary_date: new Date(user.metadata.creationTime),
          } as IUser));
          insertUsers(users)
      }
      nextPageToken = listUsersResult.pageToken;
    } while (nextPageToken);
    res.status(200).send({message: "users synced successfully !"})
  }
);

exports.syncCurrentUser = functions.runWith({secrets: [projectSecret]}).auth.user().onCreate((user: UserRecord) => {
   const mUser: IUser = {
    name: user.displayName,
    email: user.email,
    user_id: user.uid,
    anniversary_date: new Date(user.metadata.creationTime),
  }
  insertUsers([mUser])
});

