import { cleanup, render, screen } from '@testing-library/react';
import { ModalList } from '@/components';

const renderWithProp = (prop: boolean) => {
  render(
    <ModalList data-testid='modal-list' active={prop}>
      Test
    </ModalList>
  );
};

afterEach(() => {
  cleanup();
});

describe('Props active', () => {
  test('true, should to be in the document & correct children', () => {
    renderWithProp(true);
    const modalEl = screen.queryByTestId('modal-list');
    screen.getByText(/test/i);
    expect(modalEl).toBeInTheDocument();
  });

  test("false, shouldn't be in the document", () => {
    renderWithProp(false);
    const modalEl = screen.queryByTestId('modal-list');
    expect(modalEl).not.toBeInTheDocument();
  });
});
