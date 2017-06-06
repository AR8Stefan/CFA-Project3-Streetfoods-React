const AnyReactComponent = ({ text }) => (
  <Button style={{
    position: 'relative', color: 'white', background: 'red',
    height: 32, width: 64, top: -20, left: -30,  
  }}>
    {text}
  </Button>
);