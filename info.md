There are two token types available to a Slack app: user (xoxp) and bot (xoxb) tokens. User tokens allow you to call API methods on behalf of users after they install or authenticate the app. There may be several user tokens for a single workspace. Bot tokens are associated with bot users, and are only granted once in a workspace where someone installs the app. The bot token your app uses will be the same no matter which user performed the installation. Bot tokens are the token type that most apps use.

For brevity, we’re going to use bot tokens for this guide.
Your app behaves similarly to people on your team — it can post messages, add emoji reactions, and more. To listen for events happening in a Slack workspace (like when a message is posted or when a reaction is posted to a message) you’ll use the Events API to subscribe to event types.

You’ll see a text input labeled Request URL. The Request URL is a public URL where Slack will send HTTP POST requests corresponding to events you specify.

    ⚙️We’ve collected some of the most common hosting providers Slack developers use to host their apps on our API site

When an event occurs, Slack will send your app some information about the event, like the user that triggered it and the channel it occurred in. Your app will process the details and can respond accordingly.

Using a local Request URL for development

Now you have a public-facing URL for your app that tunnels to your local machine. The Request URL that you use in your app configuration is composed of your public-facing URL combined with the URL your app is listening on. By default, Bolt apps listen at /slack/events so our full request URL would be https://8e8ec2d7.ngrok.io/slack/events.

    ⚙️Bolt uses the /slack/events endpoint to listen to all incoming requests (whether shortcuts, events, or interactivity payloads). When configuring endpoints within your app configuration, you’ll append /slack/events to all request URLs.

Under the Enable Events switch in the Request URL box, go ahead and paste in your URL. As long as your Bolt app is still running, your URL should become verified.
