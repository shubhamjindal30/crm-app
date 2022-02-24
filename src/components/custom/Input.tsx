import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, TextInput, HelperText } from 'react-native-paper';

import { useColorScheme } from '../../hooks';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: 'transparent'
  },
  helperText: {
    alignSelf: 'flex-start'
  }
});

const Input = (props: React.ComponentProps<typeof TextInput> & { errorMsg?: string }, ref: any) => {
  const { colors } = useTheme();
  const colorScheme = useColorScheme();

  return (
    <>
      <TextInput
        ref={ref}
        blurOnSubmit={false}
        mode="outlined"
        label={props.label}
        value={props.value}
        underlineColor={colors.primary}
        theme={{
          colors: {
            placeholder: colors.primary,
            text: colorScheme === 'dark' ? colors.white : colors.black
          }
        }}
        secureTextEntry={props.secureTextEntry ?? false}
        style={{
          ...styles.input,
          backgroundColor: colorScheme === 'dark' ? colors.black : colors.white
        }}
        onFocus={props.onFocus}
        onChangeText={props.onChangeText}
        error={!!props.errorMsg}
        {...props}
      />
      {
        // @ts-ignore
        <HelperText type="error" style={styles.helperText} visible={!!props.errorMsg}>
          {props.errorMsg || ''}
        </HelperText>
      }
    </>
  );
};

export default React.forwardRef(Input);
