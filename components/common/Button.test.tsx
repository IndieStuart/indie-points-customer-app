import React from 'react';
import { renderWithProviders, fireEvent } from '../../lib/test-utils';
import Button from './Button';

describe('Button', () => {
  it('should render with correct label', () => {
    const { getByText } = renderWithProviders(
      <Button label="Test Button" onPress={() => {}} />,
    );

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('should call onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = renderWithProviders(
      <Button label="Press Me" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Press Me'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should have correct accessibility properties', () => {
    const { getByRole } = renderWithProviders(
      <Button label="Accessible Button" onPress={() => {}} />,
    );

    const button = getByRole('button');
    expect(button).toBeTruthy();
    expect(button.props.accessibilityLabel).toBe('Accessible Button');
  });

  it('should render with primary variant by default', () => {
    const { getByRole } = renderWithProviders(
      <Button label="Primary Button" onPress={() => {}} />,
    );

    const button = getByRole('button');
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        backgroundColor: '#3182CE',
      }),
    );
  });

  it('should render with secondary variant when specified', () => {
    const { getByRole } = renderWithProviders(
      <Button
        label="Secondary Button"
        onPress={() => {}}
        variant="secondary"
      />,
    );

    const button = getByRole('button');
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        backgroundColor: '#D69E2E',
      }),
    );
  });

  it('should render with tertiary variant when specified', () => {
    const { getByRole } = renderWithProviders(
      <Button label="Tertiary Button" onPress={() => {}} variant="tertiary" />,
    );

    const button = getByRole('button');
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        backgroundColor: '#E53E3E',
      }),
    );
  });

  it('should render with transparent background when outline is true', () => {
    const { getByRole } = renderWithProviders(
      <Button label="Outline Button" onPress={() => {}} outline />,
    );

    const button = getByRole('button');
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      }),
    );
  });

  it('should render with full width when fullWidth is true', () => {
    const { getByRole } = renderWithProviders(
      <Button label="Full Width Button" onPress={() => {}} fullWidth />,
    );

    const button = getByRole('button');
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        width: '100%',
      }),
    );
  });

  it('should apply custom styles when provided', () => {
    const customStyle = { marginTop: 20 };
    const { getByRole } = renderWithProviders(
      <Button
        label="Custom Style Button"
        onPress={() => {}}
        style={customStyle}
      />,
    );

    const button = getByRole('button');
    expect(button.props.style).toContainEqual(customStyle);
  });
});
