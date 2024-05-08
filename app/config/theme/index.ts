import {
  defineStyle,
  defineStyleConfig,
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import defaultTheme from './defaultTheme';
import { createRootObject } from './util.module';

const _disabled = {
  // bg: 'alpha.200',
  color: 'alpha.500',
};

const defaultBaseStyle = {
  bg: 'transparent',
  fontSize: 'sm',
  borderRadius: 'base',
  borderWidth: 1,

  maxH: '10',
  color: 'alpha.700',
  _invalid: {
    borderWidth: 1,
    borderColor: 'error.500',
  },
  _placeholder: {
    color: _disabled.color,
  },
};

const InputSelectComponent = {
  sizes: {
    sm: {
      field: {
        ...defaultBaseStyle,
        // paddingEnd: 'base',
        // paddingStart: 'base',
        // p: 'base',
      },
    },
  },
  defaultProps: {
    errorBorderColor: 'error.500',
    focusBorderColor: 'primary.500',
    // variant: 'outline',
  },
};

const Button = defineStyleConfig({
  baseStyle: defaultBaseStyle,
  variants: {
    solid: defineStyle<any>((props: any) => {
      const { colorScheme: c } = props;
      if (
        c === 'primary' ||
        c === 'success' ||
        c === 'error' ||
        c === 'warning'
      ) {
        return {
          color: 'white',
        };
      }
    }),

    error: {
      bg: 'error.500',
      textColor: 'alpha.0',
      _hover: {
        bg: 'error.300',
      },
    },
  },
  sizes: {
    sm: {
      fontSize: 'md',
      h: '10',
    },
  },
});

const theme = extendTheme(
  {
    ...defaultTheme,
    styles: {
      global: (props: any) => {
        return {
          ':root': createRootObject(props, mode),
          a: {
            color: 'primary.500',
            fontSize: 'sm',
            _disabled,
          },
          button: {
            _disabled: {
              _disabled,
              _hover: {
                bg: 'gray.200',
                color: 'gray.600',
              },
            },
          },
          input: {
            _disabled,
          },
          select: {
            _disabled,
          },
        };
      },
    },
    direction: 'rtl',
    config: {
      initialColorMode: 'red',
      useSystemColorMode: false,
      cssVarPrefix: 'arzesh',
    },
    components: {
      Button,
      Input: InputSelectComponent,
      PinInput: InputSelectComponent,
      PinInputField: InputSelectComponent,
      Select: InputSelectComponent,
      Textarea: {
        baseStyle: defaultBaseStyle,
        sizes: {
          sm: {
            borderRadius: 'base',
            borderColor: 'gray.100',
            borderWidth: 1,
          },
        },
        defaultProps: {
          colorScheme: 'primary',
          errorBorderColor: 'error.500',
          variant: 'field',
          focusBorderColor: 'primary.500',
        },
      },
      Text: {
        defaultProps: {
          size: 'sm',
        },
        baseStyle: {
          lineHeight: 'base',
          fontSize: 'base',
          color: 'alpha.700',
        },
      },
      Heading: {
        defaultProps: {
          size: 'sm',
        },
        baseStyle: {
          fontSize: 'heading',
          color: 'alpha.700',
        },
      },
      Drawer: {
        defaultProps: {
          size: 'menu',
        },
        sizes: {
          menu: {
            dialog: { w: '768px', mx: 'auto', roundedTop: 'sm' },
            container: { w: '768px', mx: 'auto' },
          },
        },
      },
    },
  },

  withDefaultProps({
    defaultProps: {
      size: 'sm',
    },
    components: ['Input', 'Button', 'Textarea', 'Select', 'Checkbox', 'Radio'],
  }),
  withDefaultColorScheme({
    colorScheme: 'primary',
    components: [
      'Slider',
      'Progress',
      'Checkbox',
      'Accordion',
      'Switch',
      'Radio',
      'Textarea',
      'Button',
      'Input',
      'Select',
      'Tag',
      'Tabs',
      'Modal',
    ],
  })
);

// as default export
export default theme;

// as named export
export { theme };
