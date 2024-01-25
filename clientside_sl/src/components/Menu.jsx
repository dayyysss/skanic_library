export const MENU_ITEMS=[
    {
        name:'Dashboard',
        icon :'bi bi-speedometer'
    },
    {
        name:'Home',
        icon :'bi bi-house-fill'
    },
    {
        name:'Tools',
        icon :'bi bi-tools'
    },
    {
        name:'Settings',
        icon :'bi bi-gear-fill',

        children:[
            {
                name:'General Settings',
                icon :'bi bi-caret-right'
            },
            {
                name:'User Settings',
                icon :'bi bi-caret-right',
                children:[
                    {
                        name:'Admin User',
                        icon :'bi bi-caret-right'
                    },
                    {
                        name:'General User',
                        icon :'bi bi-caret-right',
                        children:[
                            {
                                name:'Admin User1',
                                icon :'bi bi-caret-right'
                            },
                        ]
                    },
                ]
            },
        ]
    }
]