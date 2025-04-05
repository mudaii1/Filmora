import { useSearchParams } from "react-router-dom";

export function useUpdateSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParams = (newParams) => {
    // Create a new URLSearchParams object with current params
    const params = new URLSearchParams(searchParams);

    // Update with new params
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    // Update the URL without triggering a navigation
    setSearchParams(params, { replace: true });
  };

  return { searchParams, updateParams };
}
