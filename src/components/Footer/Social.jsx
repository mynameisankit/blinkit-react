import Flex from '../common/Flex';
import SOCIAL_MEDIA from '../../data/socialMedia';

function Social() {
    return (
        <Flex gap={1} justifyContent='center'>
            {SOCIAL_MEDIA?.map(({ name, href, image }) => (
                <a 
                    key={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                    href={href}
                >
                    <img
                        className="width-16"
                        src={image}
                        alt={name}
                    />
                </a>
            ))}
        </Flex>
    );
}

export default Social;