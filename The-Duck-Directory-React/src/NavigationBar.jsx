import NavigationItem from './NavigationItem';

function NavigationBar(props) {
  if(!props.isLoggedIn){
    return null;
  }

  const navigation = [
    { title: "Home", link: "home" },
    { title: "Employee", link: "employee" },
    { title: "Prediction", link: "prediction" },
  ];
  return (
    <nav>
      <ul>
        {navigation.map((navItem, index) => (
          <NavigationItem
            key={index}
            link={navItem.link}
            title={navItem.title}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
