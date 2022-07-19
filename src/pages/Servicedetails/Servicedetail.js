
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from './../../hooks/useServiceDetail';

const Servicedetail = () => {
    const { serviceId } = useParams();
const [service] = useServiceDetail(serviceId);

   

    return (
        <div>
            <h2>Welcome to my ServiceDetails: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'> Proceed CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default Servicedetail;