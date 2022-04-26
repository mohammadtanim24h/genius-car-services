import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://tranquil-tor-90442.herokuapp.com/service/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [serviceId]);

    return [service];
}

export default useServiceDetail;