import { useEffect, useState } from 'react';
import priceService from '../Services/PriceService';

/**
 * Hook to use items retrieved via an http request
 * @param {String} endpoint Route of the api endpoint
 * @returns {Object}
 */
export default function usePrices(endpoint) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    priceService(endpoint)
      .then(price => {
        setItems(price);        
        setIsLoaded(true);
      })
      .catch(error => {
        setError(error);
        console.error(error);
      });
  }, [endpoint]);

  return { items, isLoaded, error };
}
