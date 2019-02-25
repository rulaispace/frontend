import iconNames from "./icon-name-config";

const boxing = {
    "message": {
        "title": "系统消息：",
        "details": "初始消息，请忽略！",
        "open": false
    },
    "account": {
        "open": false,
        "id": 1,
        "username": "admin",
        "password": "admin",
        "name": "管理员",
        "rule": "admin",
        "token": "6cee6c1c67684cda9dbc57b0d237f5bc"
    },
    "layout": {
        "open": true,
        "navigator": "organization",
        "loading": true
    },
    "notification": {
        "toolbar": {
            "feature": {
                "disableGutters": true,
                "showInput": true,
                "showInputIcon": true
            },
            "input": {
                "placeholder": "输入关键字查询",
                "defaultValue": ""
            }
        },
        "table": {
            "feature": {
                "pageable": true,
                "withFilter": true
            },
            "pagination": {},
            "filter": {
                "title": ""
            },
            "header": [
                {
                    "id": "title",
                    "linkable": true,
                    "label": "标题",
                    "width": "40%"
                },
                {
                    "id": "type",
                    "linkable": false,
                    "label": "类型",
                    "width": "20%"
                },
                {
                    "id": "announcer",
                    "linkable": false,
                    "label": "发布人",
                    "width": "20%"
                },
                {
                    "id": "announceDate",
                    "linkable": false,
                    "label": "发布日期",
                    "width": "20%"
                }
            ]
        }
    },
    "document": {
        "toolbar": {
            "feature": {
                "disableGutters": true,
                "showInput": true,
                "showInputIcon": true
            },
            "input": {
                "placeholder": "输入关键字查询"
            }
        },
        "table": {
            "feature": {
                "pageable": true,
                "withFilter": true
            },
            "pagination": {},
            "filter": {
                "title": ""
            },
            "header": [
                {
                    "id": "title",
                    "label": "标题",
                    "width": "90%",
                    "linkable": true
                },
                {
                    "id": "operator",
                    "label": "操作",
                    "width": "10%",
                    "linkable": true
                }
            ]
        }
    },
    "organization": {
        "mode": "edit",
        "toolbar": {
            "feature": {
                "disableGutters": true,
                "showInput": true,
                "showInputIcon": true,
                "showRightButtonGroup": true,
                "rootClassName": "toolbarDefaultRoot",
                "variant": "dense",
                "growClassName": "toolbarDefaultGrow",
                "showLeftButton": false,
                "showTitle": false,
                "showInputButton": false
            },
            "input": {
                "iconKey": "icon_attachment",
                "placeholder": "输入关键字查询",
                "disabled": true,
                "className": "toolbarDefaultInput",
                "iconClassName": "toolbarDefaultInputIcon",
                "inputRootClassName": "toolbarDefaultInputRoot",
                "inputInputClassName": "toolbarDefaultInputInput"
            },
            "leftButton": {
                "id": "icon_menu",
                "rootClassName": "toolbarDefaultLeftButton"
            },
            "title": {
                "label": "Material-UI",
                "variant": "h6",
                "rootClassName": "toolbarDefaultTitle"
            },
            "rightButtonGroup": {
                "rootClassName": "toolbarDefaultRightButtonGroup"
            }
        },
        "nestedList": {
            "feature": {
                "title": "中国平安",
                "listClassName": "nestedListDefaultList",
                "collapsedIconKey": "icon_arrow_right",
                "expandedIconKey": "icon_arrow_down",
                "textClassName": "nestedListDefaultText"
            },
            "data": [
                {
                    "id": 2,
                    "level": 1,
                    "type": "department",
                    "primaryText": "技术部",
                    "secondaryText": "负责开发工作",
                    "children": []
                },
                {
                    "id": 3,
                    "level": 1,
                    "type": "department",
                    "primaryText": "人力资源部",
                    "secondaryText": "招聘、薪酬、培训",
                    "children": [
                        {
                            "id": 4,
                            "level": 2,
                            "type": "department",
                            "primaryText": "人力资源部薪酬室",
                            "secondaryText": "薪酬",
                            "children": []
                        }
                    ]
                },
                {
                    "id": 5,
                    "level": 1,
                    "type": "department",
                    "primaryText": "办公室",
                    "secondaryText": "负责相关行政事宜",
                    "children": [
                        {
                            "id": 6,
                            "level": 2,
                            "type": "employee",
                            "primaryText": "张三",
                            "secondaryText": "办公室主任",
                            "children": []
                        }
                    ]
                }
            ]
        },
        dialog: {
            open: true,
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
                id: {
                    value: 2,
                },
                level: {
                    value: 1,
                },
                primaryText: {
                    value: "技术部",
                },
                secondaryText: {
                    value: "负责开发工作"
                }
            }
        }
    },
    "schedule": {
        "toolbar": {
            "feature": {
                "disableGutters": true,
                "showInput": false,
                "showInputIcon": false,
                "showRightButtonGroup": true,
                "type": "schedule_day_type"
            },
            "input": {
                "iconKey": "icon_filter_list",
                "placeholder": "选择成员过滤",
                "defaultValue": ""
            }
        },
        "table": {
            "feature": {
                "pageable": false
            },
            "pagination": {},
            "header": [
                {
                    "id": "time",
                    "numeric": true,
                    "disablePadding": true,
                    "label": "时间",
                    "width": "8%"
                },
                {
                    "id": "event",
                    "disablePadding": false,
                    "width": "92%",
                    "linkable": true
                }
            ]
        }
    },
    "resource": {
        "toolbar": {
            "feature": {
                "disableGutters": true,
                "showInput": true,
                "showInputIcon": true
            },
            "input": {
                "placeholder": "输入关键字查询"
            }
        },
        "table": {
            "feature": {
                "pageable": true,
                "withFilter": true
            },
            "pagination": {},
            "filter": {
                "name": ""
            },
            "header": [
                {
                    "id": "name",
                    "label": "资源名称",
                    "width": "30%"
                },
                {
                    "id": "code",
                    "label": "资源编号",
                    "width": "15%"
                },
                {
                    "id": "createDate",
                    "label": "创建时间",
                    "width": "20%"
                },
                {
                    "id": "state",
                    "label": "状态",
                    "width": "15%"
                },
                {
                    "id": "operator",
                    "label": "操作",
                    "width": "20%",
                    "linkable": true
                }
            ]
        }
    },
    "rule": {},
    "announcement": {
        "toolbar": {
            "feature": {
                "disableGutters": true,
                "showInput": true,
                "showInputIcon": true
            },
            "input": {
                "placeholder": "输入关键字查询"
            }
        },
        "table": {
            "feature": {
                "pageable": true,
                "withFilter": true
            },
            "pagination": {},
            "filter": {
                "name": ""
            },
            "header": [
                {
                    "id": "name",
                    "label": "公告名称",
                    "width": "30%"
                },
                {
                    "id": "type",
                    "label": "类型",
                    "width": "15%"
                },
                {
                    "id": "releaseDate",
                    "label": "发布时间",
                    "width": "20%"
                },
                {
                    "id": "state",
                    "label": "状态",
                    "width": "15%"
                },
                {
                    "id": "operator",
                    "label": "操作",
                    "width": "20%",
                    "linkable": true
                }
            ]
        }
    },
    "regulation": {
        "toolbar": {
            "feature": {
                "disableGutters": true,
                "showInput": true,
                "showInputIcon": true
            },
            "input": {
                "placeholder": "输入姓名查询"
            }
        },
        "table": {
            "feature": {
                "pageable": true,
                "withFilter": true
            },
            "filter": {
                "name": ""
            },
            "pagination": {},
            "header": [
                {
                    "id": "name",
                    "label": "章程名称",
                    "width": "30%"
                },
                {
                    "id": "type",
                    "label": "类型",
                    "width": "15%"
                },
                {
                    "id": "releaseDate",
                    "label": "发布时间",
                    "width": "20%"
                },
                {
                    "id": "state",
                    "label": "状态",
                    "width": "15%"
                },
                {
                    "id": "operator",
                    "label": "操作",
                    "width": "20%",
                    "linkable": true
                }
            ]
        }
    }
}
export default boxing