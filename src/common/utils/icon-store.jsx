import Naming from './name'
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

export default function IconStore({iconKey, fontSize, className}) {
    switch (iconKey) {
        case Naming.MENU_CALENDAR:
            return <CalendarViewDayIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.MENU_NOTIFICATION:
            return <NotificationIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.MENU_DOCUMENT:
            return <FolderIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.MENU_SCHEDULE:
            return <ScheduleIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.MENU_ORG:
            return <HomeIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.MENU_RULE:
            return <SecurityIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.MENU_RESOURCE:
            return <DevicesIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.MENU_ANNOUNCEMENT:
            return <AnnouncementIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.MENU_TECH_DOCUMENT:
            return <ComputerIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.MENU_REGULATION:
            return <FolderSpecialIcon fontSize={fontSize?fontSize:'default'} className={className}/>

        // 图标元素
        case Naming.ICON_MENU:
            return <MenuIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_SEARCH:
            return <SearchIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_MAIL:
            return <MailIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_NOTIFICATION:
            return <NotificationIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_ACCOUNT:
            return <AccountIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_RESET:
            return <ResetIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_COMMIT:
            return <CommitIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_ATTACHMENT:
            return <FileIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_FOLDER:
            return <FolderIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_UPLOAD:
            return <UploadIcon fontSize={fontSize?fontSize:'default'} className={className}/>

        case Naming.ICON_ARROW_RIGHT:
            return <ArrowRightIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_ARROW_DOWN:
            return <ArrowDownIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_GROUP:
            return <GroupIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_GROUP_ADD:
            return <GroupAddIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_PERSON:
            return <PersonIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_PERSON_ADD:
            return <PersonAddIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_EDIT:
            return <EditIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_DELETE:
            return <DeleteIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_FILTER_LIST:
            return <FilterListIcon fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_SKIP_PRE:
            return <SkipPreIcon  fontSize={fontSize?fontSize:'default'} className={className}/>
        case Naming.ICON_SKIP_NEXT:
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