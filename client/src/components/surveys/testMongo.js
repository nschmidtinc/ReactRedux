Survey.findOne(
  {
    id: suveryId,
    recipients: {
      $eleMatch: { email: email, responded: false }
    }
  },
  {
    $inc: { [choice]: 1 },
    $set: { "recipients.$.responded": true }
  }
);
