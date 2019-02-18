import Naming from "../../common/utils/name";

export default {
    user: {
        items: [
            {
                key: Naming.MENU_NOTIFICATION,
                label: '个人通知',
            },
            {
                key: Naming.MENU_SCHEDULE,
                label: '日程管理',
            },
            {
                key: Naming.MENU_DOCUMENT,
                label: '公司文献',
            },
            {
                key: Naming.MENU_CALENDAR,
                label: '考勤与请假',
            },
        ]
    },
    admin: {
        header: '管理员',
        items: [
            {
                key: Naming.MENU_ORG,
                label: '组织架构管理',
            },
            {
                key: Naming.MENU_RULE,
                label: '系统权限开通',
            },
            {
                key: Naming.MENU_RESOURCE,
                label: '资源管理',
            },
            {
                key: Naming.MENU_ANNOUNCEMENT,
                label: '公告管理',
            },
            {
                key: Naming.MENU_TECH_DOCUMENT,
                label: '技术文献管理',
            },
            {
                key: Naming.MENU_REGULATION,
                label: '公司章程管理',
            },
        ]
    },
}