import { render } from '@testing-library/react-native';
import AppContainer from '../AppContainer';
import { Text } from 'react-native';
describe('AppContainer', () => {
  it('accepts test id', () => {
    const { getByTestId } = render(<AppContainer testID="app-container" />);
    expect(getByTestId('app-container')).toBeTruthy();
  });
  it('accepts style', () => {
    const { getByTestId } = render(
      <AppContainer
        testID="app-container"
        style={{ backgroundColor: 'red' }}
      />,
    );
    expect(getByTestId('app-container')).toHaveStyle({
      backgroundColor: 'red',
    });
  });
  it('accepts children', () => {
    const { getByTestId } = render(
      <AppContainer testID="app-container">
        <Text>Child Component</Text>
      </AppContainer>,
    );
    expect(getByTestId('app-container').props.children).toBeTruthy();
  });
});
