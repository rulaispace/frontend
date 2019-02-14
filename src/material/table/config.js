let counter = 0;
function createData(name, calories, carbs, protein) {
    counter += 1;
    return {
        id: counter,
        name,
        calories,
        carbs,
        protein
    };
}

export default {
    sample: {
        header: [
            { id: 'name', numeric: false, disablePadding: true, label: '标题' },
            { id: 'calories', numeric: false, disablePadding: false, label: '类型' },
            { id: 'carbs', numeric: false, disablePadding: false, label: '发布人' },
            { id: 'protein', numeric: false, disablePadding: false, label: '发布时间' },
        ],
        data: [
            createData('春节放假通知', '变更', '王小二', '2019-01-11'),
            createData('内部管理会会议纪要', '通知', '张小三', '2019-02-12'),
            createData('【重要】2019年员工体检安排', '通知', '白劳', '2019-03-13'),
            createData('【日程】第28届运动会日程', '变更', '郭碧婷', '2019-04-14')
        ],
        page: 0,
        rowsPerPage: 5,
        order: 'asc',
        orderBy: 'protein',
        needToolBar: true,
        selectable: true,
        selected: [],
    },
    itemLinkableTableState: {
        header: [
            {
                id: 'title',
                linkable: true,
                label: '标题',
                width: '40%',
                onClick: (data, id) => {
                    alert(JSON.stringify(data[id]))
                },
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
        body: [
            {
                title: '春节放假通知',
                type: '变更',
                announcer: '王小二',
                announceDate: '2019-01-01',
            },
            {
                title: '内部管理会会议纪要',
                type: '通知',
                announcer: '张小三',
                announceDate: '2018-12-31',
            },
            {
                title: '[重要]2019年员工体检安排',
                type: '通知',
                announcer: '白佬',
                announceDate: '2018-11-03',
            },
            {
                title: '[日程]第28届运动会日程',
                type: '变更',
                announcer: '郭碧婷',
                announceDate: '2018-11-01',
            }
        ]
    }
}