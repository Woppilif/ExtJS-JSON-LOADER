Ext.define('ExtApplication1.store.TuneStore', {
    extend: 'Ext.data.Store',
    requires: [
        'ExtApplication1.model.Tune'
    ],
    alias: 'store.tunestore',
    model:'ExtApplication1.model.Tune',
    fields: [
        'id', 'title', 'image','artist','itunesstore','preview','release_date'
    ],

    
});
