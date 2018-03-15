const keys = require("../../config/keys");

module.exports = survey => {
  return `
<html>
  <body>
    <div style="text-align: center;" >
    <h3>I'd Like your input! </h3>
    <p>Please answer the following question:</p>
    <p>${survey.body}</p>
      <div>
        <div>
        <a href="${keys.redirectDomain}/api/surveys/thanks">no</a>
        </div>
        <div>
        <a href="${keys.redirectDomain}/api/surveys/thanks">yes</a>
        <a href="${keys.redirectDomain}/api/surveys/thanks">no</a>
        </div>
        <div>
        <a href="${keys.redirectDomain}/api/surveys/thanks">no</a>
        </div>
        </div>
    </div>
 
  </body>
</html>

  `;
};
