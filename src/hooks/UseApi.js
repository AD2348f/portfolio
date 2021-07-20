import { useState, useEffect } from 'react'
import client from '../Client'

// This just puts our API call to contenful in its own hook which makes our code cleaner 

function useApi() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      client.getEntries() //works like fetch method
      .then(response => response.items)
      .then((json) => {
        setProjects(json);
        // setIsLoading(false);
      })
      .catch(console.log('request failed'));
    }, [])
 
    return [projects]
}
export default useApi