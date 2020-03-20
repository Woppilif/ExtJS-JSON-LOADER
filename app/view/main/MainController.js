/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtApplication3.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.MessageBox.show({
            title: 'Icon Support',
            msg: 'Are you sure you want to proceed?',
            buttons: Ext.MessageBox.OKCANCEL,
            icon: Ext.MessageBox.WARNING,
            fn: function (btn) {
                if (btn == 'ok') {
                    location.href = record.data.preview;
                } else {
                    return;
                }
            }
        });
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
