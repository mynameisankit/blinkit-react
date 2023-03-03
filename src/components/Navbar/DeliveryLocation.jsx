import joinClasses from '../../utils/joinClasses';

function DeliveryLocation() {
    return (
        <div className={joinClasses([
            'flex', 
            'flex-col',
            'padding-x-1'
        ])}>
            <p className='bold'>
                Delivery in 10 minutes
            </p>
            <p>
                Pune, Maharashtra, India
            </p>
        </div>
    );
}

export default DeliveryLocation;