export const init = {
    layout: {
        open: true,
        navigator: 'welcome',
    },
    message: {
        title: '系统消息：',
        details: '初始消息，请忽略！',
        open: false,
    },
    account: {
        open: false,
    },
    notification: {
        toolbar: {
            feature: {
                disableGutters: true,
                showInput: true,
                showInputIcon: true,
            },
            input: {
                placeholder: '输入关键字查询',
                defaultValue: '',
            },
        },
        table: {
            feature: {
                pageable: true,
                withFilter: true,
            },
            pagination: {
            },
            filter: {
                title: '',
            },
            header: [
                {
                    id: 'title',
                    linkable: true,
                    label: '标题',
                    width: '40%',
                    onClick: f=>f,
                    filter: f=>f,
                },
                {
                    id: 'type',
                    linkable: false,
                    label: '类型',
                    width: '20%',
                    onClick: f=>f,
                    filter: f=>f,
                },
                {
                    id: 'announcer',
                    linkable: false,
                    label: '发布人',
                    width: '20%',
                    onClick: f=>f,
                    filter: f=>f,
                },
                {
                    id: 'announceDate',
                    linkable: false,
                    label: '发布日期',
                    width: '20%',
                    onClick: f=>f,
                    filter: f=>f,
                }
            ],
        }
    },
    document: {},
    resource: {},
    rule: {},
    announcement: {
    },
    regulation: {},
    organization: {
    },
    schedule: {}
}