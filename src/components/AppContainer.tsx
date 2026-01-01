import React, { PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';

type AppContainerProps = ViewProps & PropsWithChildren;

const AppContainer = ({ children, style, ...props }: AppContainerProps) => {
  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
};

export default AppContainer;
