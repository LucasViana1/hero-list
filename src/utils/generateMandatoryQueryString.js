import md5 from 'md5';

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const generateMandatoryQueryString = () => {
  const timestamp = Math.floor(Date.now() / 1000);
  const hash = process.env.MOCK_MD5 || md5(timestamp + privateKey + publicKey);

  const query = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  return query;
};

export default generateMandatoryQueryString;
