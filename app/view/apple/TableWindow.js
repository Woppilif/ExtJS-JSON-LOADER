Ext.define('ExtApplication3.view.main.TableWindow', {
    extend: 'Ext.window.Window',
    title: 'New Window',
    width: 400,
    height: 400,
    controller:'apple',
    
    bodyPadding: '10 10 10 10',
    listeners: {
        focusleave: function (component, event, eOpts) {
            Ext.Msg.show({
                title: 'Confirm Close Window',
                msg: '<p>You clicked outside the window area and the window will now be closed.</p><p>Any informaiton you have entered will be lost.</p><p>Are you sure?</p>',
                icons: Ext.Msg.QUESTION,
                buttons: Ext.Msg.YESNO,
                fn: function (ans) {
                    console.log(ans);
                    if (ans == 'yes') {
                        component.close();
                    } else {
                        component.focus();
                    }
                }
            })
        }

    },
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Artist name',
            bind: '{theUser.artist}'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Preview',
            bind:'{theUser.preview}'
        }, {
            xtype: 'button',
            text: 'Button',
            listeners:{
                click:'editButton'
            }
        }]
    }]
});