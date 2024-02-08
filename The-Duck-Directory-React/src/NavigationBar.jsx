import NavigationItem from './NavigationItem';

function NavigationBar() {
  const navigation = [
    { title: 'Home', link: 'home' },
    { title: 'Employee', link: 'employee' },
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
