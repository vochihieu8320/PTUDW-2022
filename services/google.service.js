const { google } = require('googleapis');

const CLIENT_ID = "255770829019-uc7c62020os80unnekgsvt8q0gq1un20.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URL = "https://developers.google.com/oauthplayground/"
const REFRESH_TOKEN = "1//04TYbRFMvQLGvCgYIARAAGAQSNwF-L9IrIRjVJv0FrNsF69E-TGrWBIrB9FW_3vDBqxPT6tucojSUpG6EDp1GmgCMVNuQuks8dmE"

class googleService{
  config(){
    const oauth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URL
      );

    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    console.log("oauth2Client", oauth2Client);

      const drive = google.drive({
        version: 'v3',
        auth: oauth2Client,
      });

    return drive
  }
}

module.exports = new googleService();