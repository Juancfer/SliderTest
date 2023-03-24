const USERNAME = process.env.REACT_APP_USERNAME;
const PASSWORD = process.env.REACT_APP_PASSWORD;

const HomePage = () => {
  return (
    <div>
      <h2>HomePage!</h2>
      <p>El usuario es: {USERNAME}</p>
      <p>La contraseña es: {PASSWORD}</p>
    </div>
  );
};

export default HomePage;
