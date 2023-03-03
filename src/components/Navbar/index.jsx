import Logo from './Logo';
import DeliveryLocation from './DeliveryLocation';
import NavbarButtons from './NavbarButtons';
// Common Components
import Flex from '../common/Flex';
// Utility
import joinClasses from '../../utils/joinClasses';

function Navbar() {
    return (
        <Flex
            component='nav' 
            alignItems='center'
            className={joinClasses([
                'border-1-bottom',
                'border-solid',
                'border-grey'
            ])}
        >
            <Logo />
            <DeliveryLocation />
            <NavbarButtons />                
        </Flex>
    );
}

export default Navbar;