var user = {
    login: function (options) {

        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }


        })

    },
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },

    loguser: function (options) {
        $.ajax({
            url: LOGUSER,
            success: function (res) {
                if (res.code == 200) {
                    options.success(res.data)
                }
            }
        })
    }
}
