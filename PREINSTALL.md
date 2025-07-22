<!-- 
This file provides your users an overview of your extension. All content is optional, but this is the recommended format. Your users will see the contents of this file when they run the `firebase ext:info` command.

Include any important functional details as well as a brief description for any additional setup required by the user (both pre- and post-installation).

Learn more about writing a PREINSTALL.md file in the docs:
https://firebase.google.com/docs/extensions/publishers/user-documentation#writing-preinstall
-->

# Anniversary auth sync from invitte.me

Use this extension to send an app anniversary email to users on their anniversary dates.

This extension will trigger on new user registration and will send an email to the users on their anniversary date.

# Setup 
1) Create an account on https://www.invitte.me.
2) Create a project with your project name, icon, and description.
3) Create an API key in project settings.
4) Set your email configuration.
5) Get email templates from https://www.invitte.me/templates.
6) Set email template in project settings.
7) Copy project ID and secret from project settings and insert in this extension.

Now you are ready to go.
<!-- We recommend keeping the following section to explain how billing for Firebase Extensions works -->
# Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

<!-- List all products the extension interacts with -->
- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)
