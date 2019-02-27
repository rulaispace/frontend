import iconNames from "./icon-name-config";

const boxing = {
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
    document: {
        toolbar: {
            feature: {
                disableGutters: true,
                showInput: true,
                showInputIcon: true,
            },
            input: {
                placeholder: '输入关键字查询',
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
                    label: '标题',
                    width: '90%',
                    linkable: true,
                },
                {
                    id: 'operator',
                    label: '操作',
                    width: '10%',
                    linkable: true,
                },
            ]
        }
    },
    resource: {
        toolbar: {
            feature: {
                disableGutters: true,
                showInput: true,
                showInputIcon: true,
            },
            input: {
                placeholder: '输入关键字查询',
            }
        },
        table: {
            feature: {
                pageable: true,
                withFilter: true,
            },
            pagination: {
            },
            filter: {
                name: '',
            },
            header: [
                {
                    id: 'name',
                    label: '资源名称',
                    width: '30%',
                },
                {
                    id: 'code',
                    label: '资源编号',
                    width: '15%',
                },
                {
                    id: 'createDate',
                    label: '创建时间',
                    width: '20%',
                },
                {
                    id: 'state',
                    label: '状态',
                    width: '15%',
                },
                {
                    id: 'operator',
                    label: '操作',
                    width: '20%',
                    linkable: true,
                },
            ]
        }
    },
    rule: {
        toolbar: {
            feature: {
                disableGutters: true,
                showInput: true,
                showInputIcon: true,
                showRightButtonGroup: true,
            },
            input: {
                placeholder: '输入关键字查询',
            }
        },
        table: {
            feature: {
                pageable: true,
                withFilter: true,
            },
            pagination: {
            },
            filter: {
                name: '',
            },
            header: [
                {
                    id: 'name',
                    label: '姓名',
                    width: '30%',
                },
                {
                    id: 'department',
                    label: '部门',
                    width: '15%',
                },
                {
                    id: 'createDate',
                    label: '创建时间',
                    width: '20%',
                },
                {
                    id: 'state',
                    label: '状态',
                    width: '15%',
                },
                {
                    id: 'operator',
                    label: '操作',
                    width: '20%',
                    linkable: true,
                },
            ]
        }
    },
    announcement: {
        toolbar: {
            feature: {
                disableGutters: true,
                showInput: true,
                showInputIcon: true,
            },
            input: {
                placeholder: '输入关键字查询',
            }
        },
        table: {
            feature: {
                pageable: true,
                withFilter: true,
            },
            pagination: {
            },
            filter: {
                name: '',
            },
            header: [
                {
                    id: 'name',
                    label: '公告名称',
                    width: '30%',
                },
                {
                    id: 'type',
                    label: '类型',
                    width: '15%',
                },
                {
                    id: 'releaseDate',
                    label: '发布时间',
                    width: '20%',
                },
                {
                    id: 'state',
                    label: '状态',
                    width: '15%',
                },
                {
                    id: 'operator',
                    label: '操作',
                    width: '20%',
                    linkable: true,
                },
            ]
        }
    },
    regulation: {
        toolbar: {
            feature: {
                disableGutters: true,
                showInput: true,
                showInputIcon: true,
            },
            input: {
                placeholder: '输入姓名查询',
            }
        },
        table: {
            feature: {
                pageable: true,
                withFilter: true,
            },
            filter: {
                name: '',
            },
            pagination: {
            },
            header: [
                {
                    id: 'name',
                    label: '章程名称',
                    width: '30%',
                },
                {
                    id: 'type',
                    label: '类型',
                    width: '15%',
                },
                {
                    id: 'releaseDate',
                    label: '发布时间',
                    width: '20%',
                },
                {
                    id: 'state',
                    label: '状态',
                    width: '15%',
                },
                {
                    id: 'operator',
                    label: '操作',
                    width: '20%',
                    linkable: true,
                },
            ]
        }
    },
    organization: {
        mode: 'main',
        toolbar: {
            feature: {
                disableGutters: true,
                showInput: true,
                showInputIcon: true,
                showRightButtonGroup: true,
            },
            input: {
                iconKey: iconNames.search,
                placeholder: '输入关键字查询',
            },
        },
        nestedList: {},
        dialog: {
            open: false,
            toolbar: {
                feature: {
                    showInput: false,
                    showRightButtonGroup: true,
                    showLeftButton: true,
                },
                leftButton: {
                    id: iconNames.close,
                }
            },
            form: {
            }
        }
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
                },
            ]
        }
    }
}

export default boxing