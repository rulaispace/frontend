export const init = {
    layout: {
        open: true,
        navigator: 'resource',
    },
    message: {
        title: '系统消息：',
        details: '初始消息，请忽略！',
        open: false,
    },
    account: {
        username: 'wangzhibin',
        password: 'helloreact!',
        open: false,
        name: '王志斌',
        rule: 'admin',
        token: '264a75bc7aca4a28a7f8cff2b98d58ea',
    },
    notification: {
        query: '通知',
        dataList: [
            {
                idKey: 'NOTI-001',
                title: '春节放假通知',
                type: '变更',
                announcer: '王小二',
                announceDate: '2019-01-01',
            },
            {
                idKey: 'NOTI-002',
                title: '内部管理会会议纪要',
                type: '通知',
                announcer: '张小三',
                announceDate: '2018-12-31',
            },
            {
                idKey: 'NOTI-003',
                title: '[重要]2019年员工体检安排',
                type: '通知',
                announcer: '白佬',
                announceDate: '2018-11-03',
            },
            {
                idKey: 'NOTI-004',
                title: '[日程]第28届运动会日程',
                type: '变更',
                announcer: '郭碧婷',
                announceDate: '2018-11-01',
            }
        ]
    },
    document: {
        query: '',
        dataList: [
            {
                idKey: 'DOC-001',
                title: '人文管理',
                operator: '下载',
            },
            {
                idKey: 'DOC-002',
                title: '效率提升',
                operator: '下载',
            },
            {
                idKey: 'DOC-003',
                title: '主页下载',
                operator: '下载',
            },
            {
                idKey: 'DOC-004',
                title: '员工主页-技术文献管理',
                operator: '下载',
            },
            {
                idKey: 'DOC-005',
                title: '员工主页-组织架构管理',
                operator: '下载',
            },
        ]
    },
    resource: {
        query: '',
        dataList: [
            {
                idKey: 'RES-001',
                name: '会议室1',
                code: 'ROOM-1',
                createDate: '2019-01-01',
                state: '可用',
                operator: ['修改', '删除'],
            },
            {
                idKey: 'RES-002',
                name: '会议室2',
                code: 'ROOM-2',
                createDate: '2019-01-01',
                state: '可用',
                operator: ['修改', '删除'],
            },
            {
                idKey: 'RES-003',
                name: '会议室3',
                code: 'ROOM-3',
                createDate: '2019-01-01',
                state: '可用',
                operator: ['修改', '删除'],
            },
            {
                idKey: 'RES-004',
                name: '会议室4',
                code: 'ROOM-4',
                createDate: '2019-01-01',
                state: '可用',
                operator: ['修改', '删除'],
            },
            {
                idKey: 'RES-005',
                name: '会议室5',
                code: 'ROOM-5',
                createDate: '2019-01-01',
                state: '可用',
                operator: ['修改', '删除'],
            },
            {
                idKey: 'RES-006',
                name: '会议室6',
                code: 'ROOM-6',
                createDate: '2019-01-01',
                state: '可用',
                operator: ['修改', '删除'],
            },
        ]
    },
    rule: {
        query: '',
        dataList: [
            {
                idKey: 'RULE-001',
                userName: '王小二',
                department: '办公室',
                createDate: '2019-01-01',
                state: '激活',
                operator: ['重置密码', '冻结'],
            },
            {
                idKey: 'RULE-002',
                userName: '董晓庆',
                department: '企划部',
                createDate: '2019-01-01',
                state: '冻结',
                operator: ['重置密码', '激活'],
            },
        ]
    },
    announcement: {
        query: '',
        dataList: [
            {
                idKey: 'ANC-001',
                name: '春节放假通知',
                type: '变更',
                releaseDate: '2019-01-01',
                state: '在途',
                operator: ['修改', '发布', '删除'],
            },
            {
                idKey: 'ANC-002',
                name: '内部管理会会议纪要',
                type: '通知',
                releaseDate: '2019-01-01',
                state: '撤销',
                operator: ['修改', '发布', '删除'],
            },
        ]
    },
    regulation: {
        query: '',
        dataList: [
            {
                idKey: 'REG-001',
                name: '请假制度',
                type: '人事制度',
                releaseDate: '2019-01-01',
                state: '在途',
                operator: ['修改', '发布', '删除'],
            },
            {
                idKey: 'REG-002',
                name: '会议室使用安排',
                type: '管理制度',
                releaseDate: '2019-01-01',
                state: '撤销',
                operator: ['修改', '发布', '删除'],
            },
        ]
    },
    organization: {
    },
    schedule: {
        dataList: [
            {
                idKey: 'SCDL-0001',
                time: 8,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0002',
                time: 9,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0003',
                time: 10,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0004',
                time: 11,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0005',
                time: 12,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0006',
                time: 13,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0007',
                time: 14,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0008',
                time: 15,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0009',
                time: 16,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0010',
                time: 17,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0011',
                time: 18,
                event: '晨会',
            },
            {
                idKey: 'SCDL-0012',
                time: 19,
                event: '晨会',
            },
        ]
    }
}