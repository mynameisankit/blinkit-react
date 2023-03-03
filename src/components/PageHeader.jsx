import Flex from './common/Flex';
import joinClasses from '../utils/joinClasses';
// Data
import SECONDARY_LINKS from '../data/secondaryLinks';

function PageHeader() {
    return (
        <nav className={joinClasses([
            'border-1-bottom',
            'border-grey',
            'border-solid',
            'padding-y-1',
        ])}>
            <Flex
                component='ul'
                justifyContent='center'
                gap={1}
                className='list-style-type-none'
            >
                {SECONDARY_LINKS.map(({ href, label }) => (
                    <li key={label}>
                        <a className='link' href={href}>
                            {label}
                        </a>
                    </li>
                ))}
            </Flex>
        </nav>
    );
}

export default PageHeader;
