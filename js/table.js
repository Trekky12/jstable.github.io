new JSTable("#basic");

new JSTable("#basic2", {
        perPage: 1,
        //'perPageSelect': false,
        pagerDelta: 5,
        searchable: false
    }
);

new JSTable("#example2", {
        sortable: true,
        columns: [
            {
                select: 3,
                sortable: true,
                sort: "asc"
            }
        ]
    }
);


new JSTable("#example_server", {
        serverSide: true,
        deferLoading: 1000,
        ajax: 'data.php',
        ajaxParams: {
            foo: 'bar'
        }
    }
);
