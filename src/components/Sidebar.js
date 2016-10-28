import React from 'react';
import { Link } from 'react-router'

import Avatar from 'material-ui/Avatar';
// import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import FontIcon from 'material-ui/FontIcon';

import { jobTypes, jobStatus } from '../states/constants/status';
import { colors } from '../theme';


const job_icon_style = {
  fontSize: "16px",
  verticalAlign: "bottom"
};
const job_type_style = {
  marginLeft: "12px",
  backgroundColor: colors.main.yellow
};
const demo_style = { right: "16px" };


const job_icon = (status) => {
  switch (status) {
    case 0:
      return (
        <FontIcon
          className="material-icons"
          color={colors.main.cyan}
          style={job_icon_style} >
          info
        </FontIcon>
      );
    case 1:
      return (
        <FontIcon
          className="material-icons"
          color={colors.main.yellow}
          style={job_icon_style} >
          watch_later
        </FontIcon>
      );
    case 2:
      return (
        <FontIcon
          className="material-icons"
          color={colors.main.lime}
          style={job_icon_style} >
          check_circle
        </FontIcon>
      );
    default:
      return (
        <FontIcon
          className="material-icons"
          color={colors.main.red}
          style={job_icon_style} >
          cancel
        </FontIcon>
      );
  }
};


const ResultItem = ({
  jobId,
  type,
  status,
  data
}) => (
  <ListItem
    primaryText={
      <span style={{verticalAlign: "super"}}>{data.tag}</span>
    }
    secondaryText={
      <span>
        {job_icon(status)}
        <span style={{fontFamily: "monospace"}} >{` ${jobId}`}</span>
      </span>
    }
    secondaryTextLines={1}
    leftAvatar={
      <Avatar
        size={28}
        style={job_type_style} >
        {type}D
      </Avatar>
    }
    containerElement= {
      <Link to={`/result/${jobId}`} activeClassName="active" />
    } />
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
        <Avatar
          icon={<FontIcon className="material-icons">content_paste</FontIcon>}
          color={colors.faint.teal}
          backgroundColor={colors.main.teal}
        />
    } 
    primaryText="Entry List"
    secondaryText="Retrieve a previous job from server"
    secondaryTextLines={2}
    initiallyOpen={true}
    nestedItems={
      resultList.map((result) => (
        <ResultItem {...result} key={result.jobId} />
      ))
    }
    containerElement={
      <Link to="/result" activeClassName="active" />
    }
  />
);
ResultList.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};


const Sidebar = ({ resultList }) => (
  <List>
    <Subheader>DESIGN</Subheader>
    <ListItem 
      leftAvatar={
        <Avatar
          icon={<FontIcon className="material-icons">compare_arrows</FontIcon>}
          color={colors.faint.blue}
          backgroundColor={colors.main.blue}
        />
      }
      rightIcon={
        <IconButton
          style={demo_style}
          touch={true}
          tooltip="Demo"
          tooltipPosition="bottom-left" >
          <FontIcon
            className="material-icons"
            color={colors.main.yellow}
            hoverColor={colors.main.cyan} >
            ondemand_video
          </FontIcon>
        </IconButton>
      }
      primaryText="Single Assembly"
      secondaryText={
        <p>WT Basic PCR<br/>Primerize 1D</p>
      }
      secondaryTextLines={2}
      containerElement={
        <Link to="/1d" activeClassName="active" />
      }
    />
    <Divider inset={true} />
    <ListItem
      leftAvatar={
        <Avatar
          icon={
            <FontIcon
              className="material-icons"
              hoverColor={colors.main.white} >
              apps
            </FontIcon>
          }
          color={colors.faint.blue}
          backgroundColor={colors.main.blue}
        />

      } 
      rightIcon={
        <IconButton
          style={demo_style}
          touch={true}
          tooltip="Demo"
          tooltipPosition="bottom-left" >
          <FontIcon
            className="material-icons"
            color={colors.main.yellow}
            hoverColor={colors.main.cyan} >
            ondemand_video
          </FontIcon>
        </IconButton>
      }
      primaryText="Mutate-and-Map"
      secondaryText={
        <p>M2 Libraries<br/>Primerize 2D</p>
      }
      secondaryTextLines={2}
      containerElement={
        <Link to="/2d" activeClassName="active" />
      }
    />
    <Divider inset={true} />
    <ListItem
      leftAvatar={
        <Avatar
          icon={<FontIcon className="material-icons">tune</FontIcon>}
          color={colors.faint.blue}
          backgroundColor={colors.main.blue}
        />
      } 
      rightIcon={
        <IconButton
          style={demo_style}
          touch={true}
          tooltip="Demo"
          tooltipPosition="bottom-left" >
          <FontIcon
            className="material-icons"
            color={colors.main.yellow}
            hoverColor={colors.main.cyan} >
            ondemand_video
          </FontIcon>
        </IconButton>
      }
      primaryText="Mutation/Rescue"
      secondaryText={
        <p>M2R Quartets<br/>Primerize 3D</p>
      }
      secondaryTextLines={2}
      containerElement={
        <Link to="/3d" activeClassName="active" />
      }
    />

    <Divider />
    <Subheader>RESULT</Subheader>
    <ResultList resultList={resultList} />
  </List>
);
Sidebar.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};


export default Sidebar;
