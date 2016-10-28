import React from 'react';
import { Link } from 'react-router'

import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import { colors } from '../theme';
import injectSheet from 'react-jss';
import jssImportant from '../utilities/jssImportant';

import { jobTypes, jobStatus } from '../states/constants/status';


const styles = {
  listItem: {
    '&:hover': {
      backgroundColor: colors.main.black
    }
  },
  activeListItem: {
    backgroundColor: colors.main.grey,
    '&:hover': {
      backgroundColor: colors.faint.grey
    }
  },
  designIcon: {
    backgroundColor: colors.main.blue,
    '& > span.material-icons': { color: colors.faint.blue },
    '&:hover': {
      backgroundColor: colors.main.cyan,
      '& > span.material-icons': { color: colors.main.white }
    }
  },
  listIcon: {
    backgroundColor: colors.main.teal,
    '& > span.material-icons': { color: colors.faint.teal },
    '&:hover': {
      backgroundColor: colors.main.green,
      '& > span.material-icons': { color: colors.main.white }
    }
  },
  jobStatusIcon: {
    fontSize: "16px",
    verticalAlign: "bottom"
  },
  jobTypeIcon: {
    marginLeft: "12px",
    backgroundColor: colors.faint.yellow,
    color: colors.main.purple,
    '&:hover': {
      backgroundColor: colors.main.teal,
      color: colors.main.white
    }
  },
  entryPrimaryText: { verticalAlign: "super" },
  divider: { backgroundColor: colors.main.grey },
  dividerWide: { bacogroundCOlor: colors.faint.grey },
  whiteText: { color: colors.main.white },
  jobIdText: { fontFamily: "monospace" },
};


const job_icon = (status, styles) => {
  switch (status) {
    case 0:
      return (
        <FontIcon
          className={`material-icons ${styles}`}
          color={colors.main.cyan} >
          info
        </FontIcon>
      );
    case 1:
      return (
        <FontIcon
          className={`material-icons ${styles}`}
          color={colors.main.yellow} >
          watch_later
        </FontIcon>
      );
    case 2:
      return (
        <FontIcon
          className={`material-icons ${styles}`}
          color={colors.main.lime} >
          check_circle
        </FontIcon>
      );
    default:
      return (
        <FontIcon
          className={`material-icons ${styles}`}
          color={colors.main.red} >
          cancel
        </FontIcon>
      );
  }
};


const ResultItem = ({
  jobId,
  type,
  status,
  data,
  styles
}) => (
  <ListItem
    className={`${styles.whiteText} ${styles.listItem}`}
    primaryText={
      <span className={styles.entryPrimaryText}>{data.tag}</span>
    }
    secondaryText={
      <span>
        {job_icon(status, styles.jobStatusIcon)}
        <span className={styles.jobIdText} >{` ${jobId}`}</span>
      </span>
    }
    secondaryTextLines={1}
    leftAvatar={
      <Avatar
        size={28}
        className={styles.jobTypeIcon} >
        {type}D
      </Avatar>
    }
    containerElement= {
      <Link to={`/result/${jobId}`} activeClassName={styles.activeListItem} />
    } />
);
ResultItem.propTypes = {
  jobId: React.PropTypes.string.isRequired,
  type: React.PropTypes.number.isRequired,
  status: React.PropTypes.number.isRequired,
  data: React.PropTypes.object.isRequired,
  styles: React.PropTypes.object.isRequired
};

const ResultList = ({
  resultList,
  styles
}) => (
  <ListItem
    className={`${styles.whiteText} ${styles.listItem}`}
    leftAvatar={
        <Avatar
          icon={<FontIcon className="material-icons">content_paste</FontIcon>}
          className={styles.listIcon}
        />
    } 
    primaryText="Entry List"
    secondaryText="Retrieve a previous job from server"
    secondaryTextLines={2}
    initiallyOpen={true}
    nestedItems={
      resultList.map((result) => (
        <ResultItem {...result} key={result.jobId} styles={styles} />
      ))
    }
    containerElement={
      <Link to="/result" activeClassName={styles.activeListItem} />
    }
  />
);
ResultList.propTypes = {
  resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  styles: React.PropTypes.object.isRequired
};


class Sidebar extends React.Component {
  static propTypes = {
    resultList: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  render() {
  const { resultList, sheet: { classes: styles } } = this.props;

    return (
      <List>
        <Subheader>DESIGN</Subheader>
        <ListItem 
          className={`${styles.whiteText} ${styles.listItem}`}
          leftAvatar={
            <Avatar
              icon={<FontIcon className="material-icons">compare_arrows</FontIcon>}
              className={styles.designIcon}
            />
          }
          rightIconButton={
            <IconButton
              touch={true}
              tooltip="Demo"
              tooltipPosition="bottom-left" 
              tooltipStyles={{backgroundColor: colors.main.black}} >
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
            <Link to="/1d" activeClassName={styles.activeListItem} />
          }
        />
        <Divider inset={true} className={styles.divider} />
        <ListItem
          className={`${styles.whiteText} ${styles.listItem}`}
          leftAvatar={
            <Avatar
              icon={<FontIcon className="material-icons"> apps</FontIcon> }
              className={styles.designIcon}
            />
          } 
          rightIconButton={
            <IconButton
              touch={true}
              tooltip="Demo"
              tooltipPosition="bottom-left" 
              tooltipStyles={{backgroundColor: colors.main.black}} >
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
            <Link to="/2d" activeClassName={styles.activeListItem} />
          }
        />
        <Divider inset={true} className={styles.divider} />
        <ListItem
          className={`${styles.whiteText} ${styles.listItem}`}
          leftAvatar={
            <Avatar
              icon={<FontIcon className="material-icons">tune</FontIcon>}
              className={styles.designIcon}
            />
          } 
          rightIconButton={
            <IconButton
              touch={true}
              tooltip="Demo"
              tooltipPosition="bottom-left" 
              tooltipStyles={{backgroundColor: colors.main.black}} >
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
            <Link to="/3d" activeClassName={styles.activeListItem} />
          }
        />

        <Divider className={styles.dividerWide} />
        <Subheader>RESULT</Subheader>
        <ResultList resultList={resultList} styles={styles} />
      </List>
    );
  }
}


export default injectSheet(jssImportant(styles))(Sidebar);
