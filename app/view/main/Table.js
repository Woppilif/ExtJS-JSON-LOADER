Ext.define('ExtApplication1.view.main.Table', {
    extend: 'Ext.grid.Panel',
    alias: 'viewmodel.mainviewmodel',
    xtype:'tableExtend',
    title:'Hello, Apple',
    scrollable:true,
    height: 350, 
    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Artist', dataIndex: 'artist', flex: 1 },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Release date', dataIndex: 'release_date', flex: 1 }
    ],

    store: {
        model: 'ExtApplication1.model.Tune',
        autoLoad: true
    },
    listeners: {
        select: 'onItemSelected'
    }
    
});

