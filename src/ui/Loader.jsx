function Loader() {
  return (
    <div className="bg-background-primary absolute inset-0 z-50 flex min-h-dvh items-center justify-center">
      <img
        src="/public/assets/loading.gif"
        alt="Loading"
        className="h-500px w-500px"
      />
    </div>
  );
}

export default Loader;
