const navbarStyles = {
    topnav: {
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        height: '60px',

    },
    logo: {
        width: '40px',
    },

    title: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: '50px',
    },
    form: {
        display: 'flex',
        flex: '2',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '50px',
    },
    searchField: {
        backgroundColor: '#FAFAFA',
        width: '300px',
        padding: '10px 35px 10px 15px',
        border: 'none',
        borderRadius: '10px',
        outline: 'none',
        height: '15px',
        fontSize: '12px',
    },
    searchButton: {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        marginLeft: '-45px',

        "& img": {
            width: '20px',
            height: '20px',
            objectFit: 'cover',
        },
    },
    Icons: {
        flex: '1',
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '50px',
    },
};

export default navbarStyles;