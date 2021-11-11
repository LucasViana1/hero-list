import logoImg from '@assets/logo/Group.png';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/">
    <img src={logoImg} alt="Logo Marvel" />
  </Link>
);

export default Logo;
