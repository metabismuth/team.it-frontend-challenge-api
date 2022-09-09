import "./Navigation.sass";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/postindex">Post Index</a></li>
        <li><a href="/clowns">Clown Photos</a></li>
        <li><a href="/frogs">Frog Festival 2023</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
