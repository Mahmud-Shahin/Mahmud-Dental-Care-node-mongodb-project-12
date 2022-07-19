import { useState, useEffect } from 'react';

const useServiceDetail = serviceId => {


    
    const [service, setService] = useState({});

    useEffect(() => {

        const url = `https://secret-reef-44211.herokuapp.com/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [serviceId]);
    return[service]
}

 export default useServiceDetail;