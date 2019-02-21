import iconNames from "../config/icon-name-config";

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
                },
                {
                    id: 'type',
                    linkable: false,
                    label: '类型',
                    width: '20%',
                },
                {
                    id: 'announcer',
                    linkable: false,
                    label: '发布人',
                    width: '20%',
                },
                {
                    id: 'announceDate',
                    linkable: false,
                    label: '发布日期',
                    width: '20%',
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
    schedule: {
        toolbar: {
            feature: {
                disableGutters: true,
                showInput: false,
                showInputIcon: false,
                showRightButtonGroup: true,
                type: iconNames.SCHEDULE_DAY_TYPE,
            },
            input: {
                iconKey: iconNames.filterList,
                placeholder: '选择成员过滤',
                defaultValue: '',
            },
        },
        table: {
            feature: {
                pageable: false,
            },
            pagination: {
            },
            header: [
                {
                    id: 'time',
                    numeric: true,
                    disablePadding: true,
                    label: '时间',
                    width: '8%',
                },
                {
                    id: 'event',
                    disablePadding: false,
                    width: '92%',
                    linkable: true,
                    onClick: () => {
                        alert('I am clicked.')
                    },
                },
            ]
        }
    }
}