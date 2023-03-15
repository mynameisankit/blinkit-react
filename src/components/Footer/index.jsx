import joinClasses from '../../utils/joinClasses';
import Flex from '../common/Flex';
import Assurance from './Assurance';
import Social from './Social';
import AppStores from './AppStores';
import { 
    COPYRIGHT,
    DISCLAIMER
} from '../../data/constants';

function Footer() {
    return (
        <footer className={joinClasses([
            'margin-top-10',
            'padding-bottom-1'
        ])}>
            <Assurance />
            
            <section className={joinClasses([
                'width-per-80',
                'margin-y-3',
                'margin-x-auto',
                'text-align-center'
            ])}>
                {DISCLAIMER}
            </section>

            <Flex
                justifyContent='space-around'
                alignItems='center'
            >
                <p className='width-100'>
                    {COPYRIGHT}
                </p>

                <AppStores />
                <Social />
            </Flex>

        </footer>
    );
}

export default Footer;