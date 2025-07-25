<!-- 
This file provides your users an overview of how to use your extension after they've installed it. All content is optional, but this is the recommended format. Your users will see the contents of this file in the Firebase console after they install the extension.

Include instructions for using the extension and any important functional details. Also include **detailed descriptions** for any additional post-installation setup required by the user.

Reference values for the extension instance using the ${param:PARAMETER_NAME} or ${function:VARIABLE_NAME} syntax.
Learn more in the docs: https://firebase.google.com/docs/extensions/publishers/user-documentation#reference-in-postinstall

Learn more about writing a POSTINSTALL.md file in the docs:
https://firebase.google.com/docs/extensions/publishers/user-documentation#writing-postinstall
-->
# Anniversary auth sync from invitte.me
Welcome! This is the extension, which will sync your old and new users' auth with https://invitte.me to send anniversary reminders to your users.

Well, if you are seeing this page it means that you are interested in our product and ready to use our services.

Thank you for installing it.

# See it in action

To sync all your old users please click on the link below:

Visit the following URL:
${function:syncUsers.url}

# Using the extension

When triggered by an HTTP request, this extension will sync old users with https://www.invitte.me.

# Documentation

To learn more about invitte, visit their website at https://docs.invitte.me 

<!-- We recommend keeping the following section to explain how to monitor extensions with Firebase -->
# Monitoring

As a best practice, you can [monitor the activity](https://firebase.google.com/docs/extensions/manage-installed-extensions#monitor) of your installed extension, including checks on its health, usage, and logs.

# Contact us
If you have any issue with it or you have any questions related to this, you can reach out to us.

emails: support@invitte.me, support@presswink.com
