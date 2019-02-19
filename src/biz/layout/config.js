import MenuNameSet from "../../common/config/menu-name-config";

const config = {
    user: {
        items: [
            {
                key: MenuNameSet.notification,
                label: '个人通知',
            },
            {
                key: MenuNameSet.schedule,
                label: '日程管理',
            },
            {
                key: MenuNameSet.document,
                label: '公司文献',
            },
            {
                key: MenuNameSet.calendar,
                label: '考勤与请假',
            },
        ]
    },
    admin: {
        header: '管理员',
        items: [
            {
                key: MenuNameSet.org,
                label: '组织架构管理',
            },
            {
                key: MenuNameSet.rule,
                label: '系统权限开通',
            },
            {
                key: MenuNameSet.resource,
                label: '资源管理',
            },
            {
                key: MenuNameSet.announcement,
                label: '公告管理',
            },
            {
                key: MenuNameSet.techDocument,
                label: '技术文献管理',
            },
            {
                key: MenuNameSet.regulation,
                label: '公司章程管理',
            },
        ]
    },
}

export default config