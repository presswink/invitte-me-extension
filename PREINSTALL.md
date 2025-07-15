<!-- 
This file provides your users an overview of your extension. All content is optional, but this is the recommended format. Your users will see the contents of this file when they run the `firebase ext:info` command.

Include any important functional details as well as a brief description for any additional setup required by the user (both pre- and post-installation).

Learn more about writing a PREINSTALL.md file in the docs:
https://firebase.google.com/docs/extensions/publishers/user-documentation#writing-preinstall
-->

# Anniversary auth sync  from invitte.me

Use this extension to send an app annivarsary email to users on their anniversary dates.

This extension will trigger on new user registration and will send an email to the user's on thier anniversary date.

# Setup 
1) Create an account on https://www.invitte.me .
2) create a project with your project name, icon and description.
3) create an API key in project settings.
4) set your email configration
5) get email templetes from https://www.invitte.me/templetes
6) set email templete in project settings.
7) copy project-id and secret from project settings and insert in this extension.

now you are ready to go.
<!-- We recommend keeping the following section to explain how billing for Firebase Extensions works -->
# Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

<!-- List all products the extension interacts with -->
- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)
