import menuNames from "../../common/config/menu-name-config";

const config = {
    user: {
        items: [
            {
                key: menuNames.notification,
                label: '个人通知',
            },
            {
                key: menuNames.schedule,
                label: '日程管理',
            },
            {
                key: menuNames.document,
                label: '公司文献',
            },
            {
                key: menuNames.calendar,
                label: '考勤与请假',
            },
        ]
    },
    admin: {
        header: '管理员',
        items: [
            {
                key: menuNames.org,
                label: '组织架构管理',
            },
            {
                key: menuNames.rule,
                label: '系统权限开通',
            },
            {
                key: menuNames.resource,
                label: '资源管理',
            },
            {
                key: menuNames.announcement,
                label: '公告管理',
            },
            {
                key: menuNames.techDocument,
                label: '技术文献管理',
            },
            {
                key: menuNames.regulation,
                label: '公司章程管理',
            },
        ]
    },
}

export default config