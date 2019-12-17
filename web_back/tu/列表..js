var article = {
    gaga: function (options) {
        $.ajax({
            url: 'http://localhost:8000/admin/category_search',
            success: function (res) {
                if (res.code == 200) {
                    options.success(res);
                }
            }
        })
    }
}