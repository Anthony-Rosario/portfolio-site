import React, { forwardRef, useState } from 'react';
import { Grid, Button, Typography, Popover, Box } from '@mui/material';


const Tech = forwardRef((props, ref) => {
  const [langEl, setLangEl] = useState(null);
  const [libEl, setLibEl] = useState(null);
  const [dataEl, setDataEl] = useState(null);
  const [toolsEl, setToolsEl] = useState(null);
  const [testingEl, setTestingEl] = useState(null);


  const openLangPopover = (e) => {
    setLangEl(e.currentTarget)
}
  const closeLangPopover = () => {
    setLangEl(null)
}


  const openLibPopover = (e) => {
    setLibEl(e.currentTarget)
}
  const closeLibPopover = () => {
    setLibEl(null)
}


const openDataPopover = (e) => {
  setDataEl(e.currentTarget)
}
const closeDataPopover = () => {
  setDataEl(null)
}


const openToolsPopover = (e) => {
  setToolsEl(e.currentTarget)
}
const closeToolsPopover = () => {
  setToolsEl(null)
}


const openTestingPopover = (e) => {
  setTestingEl(e.currentTarget)
}
const closeTestingPopover = () => {
  setTestingEl(null)
}

  return (
    <>
      <Box ref={ref} sx={{ width: 'auto', ml: '33vw', mr: '20vw' }}>
        <Grid container rowSpacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item xs={6}>
            <Button variant="contained" onClick={openLangPopover} >
              Languages
            </Button>
            <Popover
              open={Boolean(langEl)}
              onClose={closeLangPopover}
              anchorEl={langEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              anchorPosition={{
                left: 400,
                top: 400
              }}
            >
              <Typography sx={{ p: 2 }}>
                <li>
                  HTML
                </li>
                <li>
                  JavaScript
                </li>
                <li>
                  CSS
                </li>
              </Typography>
            </Popover>
          </Grid>
          
        
          <Grid item xs={6}>
            <Button variant="contained" onClick={openLibPopover}>
              Libraries/Frameworks
            </Button>
            <Popover
              open={Boolean(libEl)}
              onClose={closeLibPopover}
              anchorEl={libEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <ul className='lib-grid'>
                  <li>
                    React
                  </li>
                  <li>
                    Node.js
                  </li>
                  <li>
                    Express
                  </li>
                  <li>
                    Redux
                  </li>
                  <li>
                    p5.js
                  </li>
                  <li>
                    Slack Bolt & SDK
                  </li>
                  <li>
                    Matter.js
                  </li>
                  <li>
                    Socket.io
                  </li>
                  <li>
                    Material UI
                  </li>
                </ul>
              </Typography>
            </Popover>
          </Grid>


          <Grid item xs={6}>
            <Button variant="contained" onClick={openDataPopover}>
              Databases
            </Button>
            <Popover
              open={Boolean(dataEl)}
              onClose={closeDataPopover}
              anchorEl={dataEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <li>
                  PostgreSQL
                </li>
              </Typography>
            </Popover>
          </Grid>


          <Grid item xs={6}>
            <Button variant="contained" onClick={openToolsPopover}>
              Tools
            </Button>
            <Popover
              open={Boolean(toolsEl)}
              onClose={closeToolsPopover}
              anchorEl={toolsEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <li>
                  Github
                </li>
                <li>
                  Heroku
                </li>
                <li>
                  Postman
                </li>
                <li>
                  Firebase
                </li>
                <li>
                  AWS
                </li>
              </Typography>
            </Popover>
          </Grid> 

          
          <Grid item xs={6}>
            <Button variant="contained" onClick={openTestingPopover}>
              Testing
            </Button>
            <Popover
              open={Boolean(testingEl)}
              onClose={closeTestingPopover}
              anchorEl={testingEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Typography sx={{ p: 2 }}>
                <li>
                  Qunit
                </li>
                <li>
                  Mocha
                </li>
                <li>
                  Jest
                </li>
              </Typography>
            </Popover>
          </Grid>
          
        </Grid>
      </Box>
    </>
  );
})

export default Tech;

// import React, { forwardRef } from 'react';
// import './TechStack.css';

// const Tech = forwardRef((props, ref) => {
//   return (
//           <section ref={ref} className="tech-stack" >
          
//             <article>
//               <h4 className="cont" >Languages</h4>
//               <ul className="languages" >
//                 <li>JavaScript</li>
//                 <li>HTML/CSS</li>
//                 <li>TypeScript</li>
//               </ul>
//             </article>
//             <article>
//               <h4 className="cont">Libraries</h4>
//               <ul className="libraries">
//                 <li>React</li>
//                 <li>Redux</li>
//                 <li>Node</li>
//                 <li>Express</li>
//               </ul>
//             </article>
//             <article>
//               <h4 className="cont" >Dev Tools</h4>
//               <ul className="tools">
//                 <li>Git/GitHub</li>
//                 <li>Heroku</li>
//                 <li>Postman</li>
//               </ul>
//             </article>
//             <article>
//               <h4 className="cont" >Databases</h4>
//               <ul className="databases" >
//                 <li>PostgreSQL</li>
//                 <li>Firebase</li>
//               </ul>
//             </article>
//             <article>
//               <h4 className="cont" >Testing Suites</h4>
//               <ul className="testing" >
//                 <li>Jest</li>
//                 <li>QUnit</li>
//                 <li>Mocha</li>
//               </ul>
//             </article>
//           </section>
      
//   );
// })

// export default Tech;