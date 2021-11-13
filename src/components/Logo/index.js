import { Link } from 'react-router-dom';
import logoImg from '@assets/logo/Group.png';

const Logo = () => (
  <Link to="/">
    <img src={logoImg} alt="Logo Marvel" />
  </Link>
);

export default Logo;
