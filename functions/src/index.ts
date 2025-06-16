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
import * as admin from "firebase-admin";
import { UserRecord } from "firebase-functions/v1/auth";
import { ListUsersResult } from "firebase-admin/auth";

admin.initializeApp(); // Initialize Firebase Admin SDK

interface IUser {
    name: string | undefined
    email: string | undefined
    user_id: string
    anniversary_date: Date
}

const baseUrl = process.env.BASE_URL ?? "https://www.invitte.me";

function insertUsers(users: IUser[]){
     fetch(`${baseUrl}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "project-id": functions.params.defineString("projectId").value() ?? '',
                "project-secret": functions.params.defineSecret("projectSecret").value() ?? ''
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

exports.syncUsers = functions.https.onRequest(
  async (req: functions.Request, res: functions.Response) => {
    let nextPageToken;
    const batchSize = 1000; // Firebase lists users in batches

    do {
      const listUsersResult: ListUsersResult = await admin
        .auth()
        .listUsers(batchSize, nextPageToken);
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
  }
);

exports.syncCurrentUser = functions.auth.user().onCreate((user: UserRecord) => {
   const mUser: IUser = {
    name: user.displayName,
    email: user.email,
    user_id: user.uid,
    anniversary_date: new Date(user.metadata.creationTime),
  }
  insertUsers([mUser])
});

