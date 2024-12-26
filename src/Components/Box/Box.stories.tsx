import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Box from './Box';
import { BoxProps } from './interface';

export default {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    flexBox: {
      control: { type: 'boolean' },
      description: 'If true, the box will behave as a flex container.',
    },
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Defines the direction of the flex container (e.g., "row", "column").',
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
      description: 'Aligns items along the main axis (e.g., "flex-start", "center").',
    },
    alignItems: {
      control: { type: 'select' },
      options: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      description: 'Aligns items along the cross axis (e.g., "stretch", "center").',
    },
    width: {
      control: { type: 'text' },
      description: 'Specifies the width of the box (e.g., "100%", "200px").',
    },
    height: {
      control: { type: 'text' },
      description: 'Specifies the height of the box (e.g., "100px", "auto").',
    },
    padding: {
      control: { type: 'text' },
      description: 'Sets the padding of the box (e.g., "sm", "md", "lg").',
    },
    paddingX: {
      control: { type: 'text' },
      description: 'Sets the horizontal padding (left and right).',
    },
    paddingY: {
      control: { type: 'text' },
      description: 'Sets the vertical padding (top and bottom).',
    },
    className: {
      control: { type: 'text' },
      description: 'Custom class names for styling.',
    },
    style: {
      control: 'object',
      description: 'Additional inline styles for customization.',
    },
  },
} as Meta;

// Default Template for Box stories
const Template: StoryFn<BoxProps> = (args) => <Box {...args}>This is a Box</Box>;

// Default Box Story with Enhanced Styling
export const Default = Template.bind({});
Default.args = {
  width: '200px',
  height: '100px',
  padding: '16px',
  style: {
    border: '1px solid #ccc',
    background: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
};

// Flexbox Example with Improved Layout and Styling
export const FlexboxExample = () => (
  <Box
    flexBox
    direction="row"
    justifyContent="center"
    alignItems="center"
    style={{
      width: '100%',
      height: '200px',
      padding: '16px',
      background: '#f0f0f0',
      border: '2px dashed #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Box
      style={{
        background: '#0CC0DF',
        padding: '16px',
        color: '#fff',
        borderRadius: '4px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      }}
    >
      Child 1
    </Box>
    <Box
      style={{
        background: '#12aa9c',
        padding: '16px',
        color: '#fff',
        borderRadius: '4px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      }}
    >
      Child 2
    </Box>
    <Box
      style={{
        background: '#20c997',
        padding: '16px',
        color: '#fff',
        borderRadius: '4px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
      }}
    >
      Child 3
    </Box>
  </Box>
);
FlexboxExample.storyName = 'Flexbox Layout Example with Enhanced Styling';

// Padding Variations with Visual Styles
export const PaddingVariations = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Box padding="xs" style={{ background: '#f9f9f9', border: '1px solid #ddd', borderRadius: '4px' }}>
      Padding XS
    </Box>
    <Box padding="sm" style={{ background: '#f9f9f9', border: '1px solid #ddd', borderRadius: '4px' }}>
      Padding SM
    </Box>
    <Box padding="lg" style={{ background: '#f9f9f9', border: '1px solid #ddd', borderRadius: '4px' }}>
      Padding LG
    </Box>
  </div>
);
PaddingVariations.storyName = 'Padding Variations with Visual Styles';

// Dynamic Flexbox with Responsive Children and Borders
export const DynamicFlexbox = () => (
  <Box
    flexBox
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    height="150px"
    style={{
      background: '#e6f7ff',
      border: '1px solid #91d5ff',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Box style={{ width: '50px', height: '50px', background: '#0CC0DF', borderRadius: '4px' }} />
    <Box style={{ width: '50px', height: '50px', background: '#12aa9c', borderRadius: '4px' }} />
    <Box style={{ width: '50px', height: '50px', background: '#20c997', borderRadius: '4px' }} />
  </Box>
);
DynamicFlexbox.storyName = 'Dynamic Flexbox Example with Borders';