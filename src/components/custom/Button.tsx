import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ButtonElement } from 'react-native-paper';

const styles = StyleSheet.create({
  style: {
    minWidth: '60%',
    borderRadius: 50
  },
  contentStyle: {
    padding: 8
  },
  labelStyle: {
    fontSize: 18
  }
});

const Button = (props: React.ComponentProps<typeof ButtonElement>) => {
  return (
    <ButtonElement
      {...props}
      style={Object.assign({}, styles.style, props.style)}
      contentStyle={Object.assign({}, styles.contentStyle, props.contentStyle)}
      labelStyle={Object.assign({}, styles.labelStyle, props.labelStyle)}
      uppercase={props.uppercase || false}
    >
      {props.children}
    </ButtonElement>
  );
};

export default Button;