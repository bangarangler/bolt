require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const { App } = require("@slack/bolt");

// Initializees your app with your bot token and signing secret

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log(`⚡ Bolt app is running!`);
})();
