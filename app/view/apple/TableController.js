Ext.define('ExtApplication3.view.main.TableController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.apple',

    editButton: function (ctrl, rec) {
        console.warn(ctrl,rec);
    },

    onEditUser: function (ctrl, rec) {
        this.editUser(rec);
    },

    editUser: function (userRecord) {
        console.log(userRecord);
        var win = new ExtApplication3.view.main.TableWindow({
            viewModel: {
                data: {
                    theUser: userRecord
                }
            }
        });

        win.show();
        
    },


});