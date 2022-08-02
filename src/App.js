import Fullpage, {FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";


function App() {
  return (
    <div className="App">
      <Fullpage>

        <FullPageSections>

          <FullpageSection style={{
            backgroundColor: 'lime',
            padding: '1em',
          }}>1</FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'coral',
            padding: '1em',
          }}>
            <div style={{backgroundColor: 'white', width: '900px', height: '900px', overflowY: 'scroll'}}>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
              <p style={{fontSize:'80px', margin: 0}}>123123123123123123</p>
            </div>
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'firebrick',
            padding: '1em',
          }}>3</FullpageSection>

        </FullPageSections>

      </Fullpage>
    </div>
  );
}

export default App;
