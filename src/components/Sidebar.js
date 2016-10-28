import React from 'react';
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import ImageTune from 'material-ui/svg-icons/image/tune';
import PageView from 'material-ui/svg-icons/action/pageview';
import OndemandVideo from 'material-ui/svg-icons/notification/ondemand-video';

import { jobTypes, jobStatus } from '../states/constants/status';

const NavLink = (props) => (
  <Link {...props} activeClassName="active" />
);


const ResultItem = ({
  jobId,
  type,
  status,
  data
}) => (
  <ListItem
    primaryText={
      <Chip style={{width:"100%"}}>
        <Avatar size={32}>{type}</Avatar>
        {data.tag}
      </Chip>
    } >
    <NavLink to={`/result/${jobId}`} ></NavLink>
  </ListItem>
);
ResultItem.propTypes = {
  jobId: React.PropTypes.string.isRequired,
  type: React.PropTypes.number.isRequired,
  status: React.PropTypes.number.isRequired,
  data: React.PropTypes.object.isRequired
};

const ResultList = ({ resultList }) => (
  <ListItem
    leftAvatar={
      <Avatar icon={<ImageTune />} />
    } 
    primaryText="Entry List"
    secondaryText="Retrieve a previous job from server"
    secondaryTextLines={2}
    initiallyOpen={true}
    nestedItems={
      resultList.map((result) => (
        <ResultItem {...result} key={result.jobId} />
      ))
    } >
      <NavLink to="/result"></NavLink>
    </ListItem>
);
ResultList.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};


const Sidebar = ({ resultList }) => (
  <Drawer docked={true} open={true} >
    <AppBar
      title="Primerize"
      iconElementLeft={<IconButton><ImageTune/></IconButton>} 
    />
    <List>
      <Subheader>DESIGN</Subheader>
      <ListItem 
        leftAvatar={
          <Avatar icon={<ImageTune />} />
        }
        rightIcon={
          <IconButton
            touch={true}
            tooltip="Demo"
            tooltipPosition="bottom-left" >
            <OndemandVideo hoverColor="#8a2" />
          </IconButton>
        }
        primaryText="Simple Assembly"
        secondaryText={
          <p>WT Basic PCR<br/>Primerize 1D</p>
        }
        secondaryTextLines={2} >
        <NavLink to="/1d"></NavLink>
      </ListItem>
      <Divider inset={true} />
      <ListItem
        leftAvatar={
          <Avatar icon={<ImageTune />} />
        } 
        rightIcon={
          <IconButton
            touch={true}
            tooltip="Demo"
            tooltipPosition="bottom-left" >
            <OndemandVideo hoverColor="#8a2" />
          </IconButton>
        }
        primaryText="Mutate-and-Map"
        secondaryText={
          <p>M2 Libraries<br/>Primerize 2D</p>
        }
        secondaryTextLines={2} >
          <NavLink to="/2d"></NavLink>
        </ListItem>
      <Divider inset={true} />
      <ListItem
        leftAvatar={
          <Avatar icon={<ImageTune />} />
        } 
        rightIcon={
          <IconButton
            touch={true}
            tooltip="Demo"
            tooltipPosition="bottom-left" >
            <OndemandVideo hoverColor="#8a2" />
          </IconButton>
        }
        primaryText="Mutation/Rescue"
        secondaryText={
          <p>M2R Quartets<br/>Primerize 3D</p>
        }
        secondaryTextLines={2} >
        <NavLink to="/3d"></NavLink>
      </ListItem>

      <Divider />
      <Subheader>RESULT</Subheader>
      <ResultList resultList={resultList} />
    </List>
  </Drawer>
);
Sidebar.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};


export default Sidebar;
