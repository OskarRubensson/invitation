import Envelope from './Envelope';

function App() {
  return (
    <div>
      <Envelope>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Hello World</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur,
          </p>
        </div>
      </Envelope>
    </div>
  );
}

export default App;
