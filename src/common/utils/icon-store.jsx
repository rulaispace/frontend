import React from 'react'
import PropTypes from 'prop-types'

import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import NotificationIcon from '@material-ui/icons/Notifications'
import SecurityIcon from '@material-ui/icons/Security';
import FolderIcon from '@material-ui/icons/Folder';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HomeIcon from '@material-ui/icons/Home';
import DevicesIcon from '@material-ui/icons/Devices';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ComputerIcon from '@material-ui/icons/Computer';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountIcon from '@material-ui/icons/AccountCircleOutlined'
import MailIcon from '@material-ui/icons/Mail'
import CommitIcon from '@material-ui/icons/DoneOutline'
import ResetIcon from '@material-ui/icons/DeleteOutline'
import FileIcon from '@material-ui/icons/AttachFile'
import UploadIcon from '@material-ui/icons/CloudUpload'
import ArrowRightIcon from '@material-ui/icons/ArrowRightOutlined'
import ArrowDownIcon from '@material-ui/icons/ArrowDropDownOutlined'
import GroupIcon from '@material-ui/icons/GroupOutlined'
import GroupAddIcon from '@material-ui/icons/GroupAddOutlined'
import PersonIcon from '@material-ui/icons/PersonOutline'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'
import EditIcon from '@material-ui/icons/EditOutlined'
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import FilterListIcon from '@material-ui/icons/FilterList'
import SkipPreIcon from '@material-ui/icons/SkipPreviousOutlined'
import SkipNextIcon from '@material-ui/icons/SkipNextOutlined'
import IconNameSet from "../config/icon-name-config";
import MenuNameSet from "../config/menu-name-config";

export default function IconStore({iconKey, fontSize, className}) {
    switch (iconKey) {
        case MenuNameSet.calendar:
            return <CalendarViewDayIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case MenuNameSet.notification:
            return <NotificationIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case MenuNameSet.document:
            return <FolderIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case MenuNameSet.schedule:
            return <ScheduleIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case MenuNameSet.org:
            return <HomeIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case MenuNameSet.rule:
            return <SecurityIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case MenuNameSet.resource:
            return <DevicesIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case MenuNameSet.announcement:
            return <AnnouncementIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case MenuNameSet.techDocument:
            return <ComputerIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case MenuNameSet.regulation:
            return <FolderSpecialIcon fontSize={fontSize?fontSize:'default'} className={className}/>

        // 图标元素
        case IconNameSet.menu:
            return <MenuIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.search:
            return <SearchIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.mail:
            return <MailIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.notification:
            return <NotificationIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.account:
            return <AccountIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.reset:
            return <ResetIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.commit:
            return <CommitIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.attachment:
            return <FileIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.folder:
            return <FolderIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.upload:
            return <UploadIcon fontSize={fontSize?fontSize:'default'} className={className}/>

        case IconNameSet.arrowRight:
            return <ArrowRightIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.arrowDown:
            return <ArrowDownIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.group:
            return <GroupIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.groupAdd:
            return <GroupAddIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.person:
            return <PersonIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.personAdd:
            return <PersonAddIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.edit:
            return <EditIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.delete:
            return <DeleteIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.filterList:
            return <FilterListIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.skipPre:
            return <SkipPreIcon  fontSize={fontSize?fontSize:'default'} className={className}/>
        case IconNameSet.skipNext:
            return <SkipNextIcon  fontSize={fontSize?fontSize:'default'} className={className}/>
        default:
            return null
    }
}

IconStore.propTypes = {
    iconKey: PropTypes.string.isRequired,
    fontSize: PropTypes.string,
    rootClassName: PropTypes.object,
}