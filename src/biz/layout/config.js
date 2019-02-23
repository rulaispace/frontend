import menuNames from "../../common/config/menu-name-config";

const config = {
    userMenu: {
        items: [
            {
                key: menuNames.notification,
                loadingUrl: 'notification/query',
                label: '个人通知',
            },
            {
                key: menuNames.schedule,
                loadingUrl: 'schedule/query',
                label: '日程管理',
            },
            {
                key: menuNames.document,
                loadingUrl: 'document/query',
                label: '公司文献',
            },
            {
                key: menuNames.calendar,
                label: '考勤与请假',
            },
        ]
    },
    adminMenu: {
        header: '管理员',
        items: [
            {
                key: menuNames.org,
                loadingUrl: 'org/query',
                label: '组织架构管理',
            },
            {
                key: menuNames.rule,
                label: '系统权限开通',
            },
            {
                key: menuNames.resource,
                loadingUrl: 'resource/query',
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