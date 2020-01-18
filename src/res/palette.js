import colors from 'res/colors';

const palette = {
    header: {
        headerStyle: {
            backgroundColor: colors.tabBackground,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
            fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
        },
        image: { 
            height: 25, 
            width: 25, 
            resizeMode: 'contain' 
        },
        headerLeftContainer: {
            marginLeft: 20, 
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center',
        },
        headerRightContainer: {
            marginRight: 20, 
            flex: 1, 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'center',
        }
    },
};

export default palette;