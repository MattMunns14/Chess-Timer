import React from 'react';
import './App.css';
import "react-tabs/style/react-tabs.css";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';

import att from './att.png';
import micron from './micron.png';
import homeDepot from './homeDepot.png';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
function App(){
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
      setValue(newValue);
    }
    return (

      <div className="App">
        <Paper className = "mainHeader">
          <div className = "anotherHeader">
              <h1>Matt Munns</h1>
          </div>
        </Paper>
          <br/>
        <Paper className = "content">

            <Tabs value={value} 
                  onChange={handleChange}         
                  indicatorColor="#4E8098"
                  textColor="inherit"
                  centered>
                  <Tab label="About"/>
                  <Tab label="Experience"/>
                  <Tab label="Projects"/>
            </Tabs>

          {value === 0 && <TabContainer>About</TabContainer>}
          {value === 1 && <TabContainer>
            <Grid container spacing={3}>
                <div className = "Experience">
                <Grid item xs>
                  <Experience
                    name = {'The Home Depot'}
                    title = {'Pricing Analytics Intern'}
                    image = {homeDepot}
                    date = {'May 2019 - August 2019'}
                    description = {[
                                    <ul>
                                      <li>Evaluating the effectiveness of pricing and assortment programs and identifying

                                      </li>
                                      <li> 
                                        Using various machine learning and statistical methodologies
                                        to complete analysis.
                                      </li>
                                      <li> 
                                        Creating visualizations in Tableau and analyzing data in Python using packages
                                        scikit-learn, scipy, and Pandas.
                                      </li>
                                    </ul>
                    ]}

                  />
                </Grid>
                  <br/>
                <Grid item xs>
                  <Experience
                  name={'The Home Depot'}
                  title = {'Senior Design Consultant'}
                  image = {homeDepot}
                  date = {'August 2018 - December 2018'}
                  description = {[<ul>
                                    <li>Worked in a team of eight to develop an assortment
                                      planning strategy that incorporates big data.
                                    </li>
                                    <li>
                                      Leveraged demographic and product data and used the 
                                      K-prototypes algorithm to create a more robust store clustering
                                      methodology. 
                                    </li>
                                    <li>
                                      Identified a 3% sales lift opportunity through analysis of demographics, 
                                      ,store traits and historical sales data.
                                    </li>
                                    <li>
                                      Delivered proof of concept in Python that will serve as the foundation
                                      for the implementation of the methodology.
                                    </li>
                          
                                  </ul>]}

                  />
                  </Grid>
                  <br/>
                  <Experience
                    name={'Micron Technology'}
                    title={'Industrial Engineering Intern'}
                    image={micron}
                    date={'May 2018 - August 2018'}
                    description={[<ul>
                                    <li>Created a website for internal use to automatically generate PowerPoint presentations from company database info. 
                                      The presentations featured charts created from company data to aid in reporting and decision making.</li>
                                    <li>Communicated with stakeholders and executives to determine website functionality and presentation content. </li>
                                    <li>Learned relevant web technologies over the summer to build and launch the website, including Flask, Docker, and OpenShift. </li>
                                    <li>Used SQL to extract raw data and Python packages Pandas and Matplotlib to create reports from the data. </li>
                                    <li>Completed a code review process and authored hand-off documentation to ensure the website's upkeep and use in my absence.</li>
                                  </ul>

                    ]}

                  />
                  <br/>
                  <Experience 
                    name={'AT&T'}
                    title={'Engineering Intern'}
                    image={att}
                    date={"May 2017 - August 2017"}
                    description={[<ul>
                                    <li>Developed and documented the procedure for 
                                      operational handover of completed projects and transitioned the operational 
                                      handover presentation to an updated template.</li>
                                    <li> Monitored the status of the department’s special projects 
                                      and reported weekly to my supervisor, summarizing information such 
                                      as ETAs, roadblocks, and deadlines and trained a team member to 
                                      continue this role in my absence.</li>
                                      <li>Contributed to a project which reported on the activity of virtual machines using Python and SQL.</li>
                                  </ul>
                                      ]}
                    />
                </div>
              </Grid>
            </TabContainer>}

            {value === 2 && <TabContainer>
              <Project
                link = {"mmunns14.github.io/Chess-Timer"}
                title = {'Chess Timer'}
                description = {'App built in React that can be used to time a chess game. '}
              />
              </TabContainer>}
            </Paper>

      </div>
    );
  }




export default App;
