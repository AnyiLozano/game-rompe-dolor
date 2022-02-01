import { Button, HStack, Image, Stack, Text, View } from "native-base";
import React, { FC } from "react";
import useControllers from "../../controllers";
import { INavigationProps } from "../../models/interfaces/components/Navigation";
import HomeButtons from "./components/Home";
import InstructionsButtons from "./components/InstructionsButtons";
import ReferencesButtons from "./components/References";
import SettingsButtons from "./components/Settings";
import NavigationStyles from './navigation.style';

const Navigation: FC<INavigationProps> = (props) => {
    const { page } = props;

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useWelcome } = useScreenHooks();
    const { user, logout } = useWelcome();

    return (
        <Stack style={NavigationStyles.View2}>
            <HStack space={3} justifyContent="center">
                <HStack style={[NavigationStyles.center, NavigationStyles.col]}>
                    <Image
                        source={require('../../assets/images/iconUser.png')}
                        alt="User's Icon"
                    />
                    <Text style={{ color: "white" }}>{user?.fullname}</Text>
                </HStack>
                <HStack style={[NavigationStyles.center, NavigationStyles.col2, { paddingLeft: '8%' }]} justifyContent="center">
                    <View style={{ paddingHorizontal: '5%' }}>
                        <SettingsButtons isSelected={page && page === "settings" ? true : false}/>
                    </View>
                    <View style={{ paddingHorizontal: '5%' }}>
                        <HomeButtons isSelected={page && page === "home" ? true : false}/>
                    </View>
                    <View style={{ paddingHorizontal: '5%' }}>
                        <InstructionsButtons isSelected={page && page === "instructions" ? true : false}/>
                    </View>
                    <View style={{ paddingHorizontal: '3%' }}>
                        <ReferencesButtons isSelected={page && page === "references" ? true : false}/>
                    </View>
                </HStack>
                <HStack style={[NavigationStyles.center, NavigationStyles.col3]} justifyContent="center">
                    <Button onPress={logout} variant="unstyled">
                        <Image
                            source={require('../../assets/images/exit.png')}
                            alt="User's Icon"
                        />
                    </Button>
                </HStack>
            </HStack>

        </Stack>
    );
}

export default Navigation;