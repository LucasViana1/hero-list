const fs = require('fs');

const path = `./.env`;
const vars = `
 API_URL=${process.env.API_URL}\n
 PUBLIC_KEY=${process.env.PUBLIC_KEY}\n
 PRIVATE_KEY=${process.env.PRIVATE_KEY}
`;
fs.writeFileSync(path, vars);
