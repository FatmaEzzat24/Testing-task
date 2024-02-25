listCount = 1;
module.exports = {
    abortOnAssertionFailure: false,
    elements:{
        contactUs: "#contact-link",
        subjectHeading: "#id_contact",
        emailAddress: "#email",
        orderReference: "#id_order",
        attachFile: "#fileUpload",
        message: "#message",
        send: "#submitMessage > span",
        alertMsg: '#center_column > p',
        home:'#columns > div.breadcrumb.clearfix > a',
        errorMsg: '#center_column > div > ol > li',
        search: '#search_query_top',
        searchBtn: '#searchbox > button',
        searchResults: '#index > div.ac_results > ul',
        //items: '#index > div.ac_results > ul > li:nth-child('+(++listCount)+')',
        
    },
    commands:[
        {
            nextItem: function(){
                 this.expect.element('#index > div.ac_results > ul > li:nth-child('+(listCount)+')').text.toContain('Dress');
                 listCount++;
            },
        //     getCount: function(){
        //         return listCount;
        //    }
            

        },
        // {
        //     getCount: function(){
        //         return listCount;
        //    }
        // },
        
        
    ]
}