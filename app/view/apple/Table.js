Ext.define('ExtApplication3.view.main.Table', {
    extend: 'Ext.tab.Panel',
    controller:'apple',
    xtype: 'tableExtend',
    items: [
       {
           title: "Hello",
           xtype: 'grid',
           scrollable: true,
           height: 350,
           layout: 'fit',
           store: {
               model: 'ExtApplication3.model.Tune',
               autoLoad: true
           },
           columns: [
               { text: 'ID', dataIndex: 'id' },
               { text: 'Artist', dataIndex: 'artist', flex: 1 },
               { text: 'Title', dataIndex: 'title', flex: 1 },
               { text: 'Release date', dataIndex: 'release_date', flex: 1 }
           ],
           listeners: {
               select: 'onEditUser'
           }
       
       },
       {
           title: "Hello 2",
       }
    ],
});