import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://tranquil-tor-90442.herokuapp.com/service")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return [services, setServices];
}

export default useServices;