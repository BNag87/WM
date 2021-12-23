var topNavBarStyle = {
  div: {
    background:
      'linear-gradient(to bottom, rgba(145,85,77,1), rgba(185, 156, 107,0.8))',
    color: 'white',
    height: '10%',
    padding: '10px',
    textAlign: 'center',
  },
  h1: {
    WebkitTextStroke: '1px rgba(160,90,70,0.5)',
    color: '#rgb(203, 186, 151)',
    textShadow: ' rgb(50, 50, 50) 4px 3px 1px',
    fontSize: '4.3rem',
    fontFamily: 'Cambria',
    margin: '0.75rem',
    fontWeight: '600',
  },
};

const TopNavbar = () => {
  return (
    <div style={topNavBarStyle.div}>
      <h1 style={topNavBarStyle.h1}>World Master</h1>
    </div>
  );
};

export default TopNavbar;