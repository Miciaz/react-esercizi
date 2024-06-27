import useCurrentLocation from "./useCurrentLocation";

const LocationComponent = () => {
  const { location, fetchLocation, loading, error } = useCurrentLocation();

  return (
    <div>
      <h1>Current Location</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location.latitude && location.longitude && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
      <button onClick={fetchLocation}>Refresh Location</button>
    </div>
  );
};

export default LocationComponent;