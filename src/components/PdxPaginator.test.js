import { getFirstAndLastVisiblePageNumbers } from './PdxPaginator';

describe('getFirstAndLastVisiblePageNumbers', () => {
  test('it returns page numbers to the right if the current page is 1', () => {
    const { firstVisiblePageNumber, lastVisiblePageNumber } = getFirstAndLastVisiblePageNumbers(100, 1);
    expect(firstVisiblePageNumber).toBe(1);
    expect(lastVisiblePageNumber).toBe(10);
  });

  test('it returns page numbers to the left if theh current page is the last page', () => {
    const { firstVisiblePageNumber, lastVisiblePageNumber } = getFirstAndLastVisiblePageNumbers(100, 100);
    expect(firstVisiblePageNumber).toBe(90);
    expect(lastVisiblePageNumber).toBe(100);
  });

  test('it returns page numbers to the left and right when the current page is near 1', () => {
    const { firstVisiblePageNumber, lastVisiblePageNumber } = getFirstAndLastVisiblePageNumbers(100, 3);
    expect(firstVisiblePageNumber).toBe(1);
    expect(lastVisiblePageNumber).toBe(10);
  });

  test('it returns page numbers to the left and right when the current page is near the last page', () => {
    const { firstVisiblePageNumber, lastVisiblePageNumber } = getFirstAndLastVisiblePageNumbers(100, 98);
    expect(firstVisiblePageNumber).toBe(90);
    expect(lastVisiblePageNumber).toBe(100);
  });

  test('it returns page numbers to the left and right when the current page is somewhere in the middle', () => {
    const { firstVisiblePageNumber, lastVisiblePageNumber } = getFirstAndLastVisiblePageNumbers(100, 45);
    expect(firstVisiblePageNumber).toBe(40);
    expect(lastVisiblePageNumber).toBe(49);
  });
});
