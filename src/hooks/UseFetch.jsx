import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useFetch(url, options = {}) {
  const { manual = false, withRefetch = true } = options;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!manual);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = url ? await axios.get(url) : null;
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (!manual) {
      fetchData();
    }
  }, [fetchData, manual]);

  const result = { data, loading, error };
  if (withRefetch) {
    result.refetch = fetchData;
  }

  return result;
}
