// Logo
import LogoImage from '../../assets/logo.svg';

function Logo() {
    return (
        <img 
            className='border-1-right border-grey border-solid padding-1_5' 
            src={LogoImage}
            alt='Blinkit Logo'
        />
    );
}

export default Logo;