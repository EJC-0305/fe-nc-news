import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Error({error, setError}) {
    const [counter, setCounter] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        counter > -1 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === -1) {
            if(error) setError()
            return navigate('/')
        }
      }, [counter]);

    return <section className="error">
        {error? <h2>{error.response.data.msg}</h2> : <h2>Page Not Found!</h2>}
        <p>Sorry, we couldn't find that page</p>
        <p>Head back to the home page to browse available articles</p>
        {counter > 0 ? <p>Taking you back to home in {counter}</p> : <p>Rerouting...</p>}
    </section> 
}

export default Error;