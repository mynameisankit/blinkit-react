import Flex from '../common/Flex';
import APP_STORES from '../../data/appStores';

function AppStores() {
    return (
        <Flex gap={1} alignItems='center'>
            <p>Download App</p>

            {APP_STORES?.map(({ image, name }) => (
                <img 
                    key={name}
                    className='width-40' 
                    src={image}
                    alt={`Download on ${name}`}
                />
            ))}
        </Flex>
    );
}

export default AppStores;