import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PdxPaginator = ({ pageCount, currentPage, onChange }) => {
  if (pageCount < 1 || currentPage < 1 || currentPage > pageCount) {
    return null;
  }

  const { firstVisiblePageNumber, lastVisiblePageNumber } = getFirstAndLastVisiblePageNumbers(pageCount, currentPage);
  const pagesBefore = getPaginationLinksFrom(firstVisiblePageNumber, currentPage - 1, onChange);
  const pagesAfter = getPaginationLinksFrom(currentPage + 1, lastVisiblePageNumber, onChange);

  return (
    <Pagination>
      <QuickPaginationLink previous disabled={currentPage === 1} pageNumber={currentPage - 1} onClick={onChange}>
        Prev
      </QuickPaginationLink>

      {pagesBefore}
      <QuickPaginationLink active pageNumber={currentPage} />
      {pagesAfter}

      <QuickPaginationLink next disabled={currentPage === pageCount} pageNumber={currentPage + 1} onClick={onChange}>
        Next
      </QuickPaginationLink>
    </Pagination>
  );
};

const QuickPaginationLink = ({
  pageNumber, onClick, active, disabled, previous, next, children
}) => (
  <PaginationItem active={active} disabled={disabled}>
    <PaginationLink previous={previous} next={next} onClick={() => { onClick && onClick(pageNumber); }}>
      { children || pageNumber}
    </PaginationLink>
  </PaginationItem>
);

const getPaginationLinksFrom = (start, end, onClick) => {
  const paginationLinks = [];

  for (let pageNumber = start; pageNumber <= end; pageNumber++) {
    paginationLinks.push((
      <QuickPaginationLink key={pageNumber} pageNumber={pageNumber} onClick={onClick} />
    ));
  }
  return paginationLinks;
};

const getFirstAndLastVisiblePageNumbers = (pageCount, currentPage) => {
  // The link for the current page sits in the middle between some links to the
  // left and some links to the right. This function figures out the first and
  // last numbers so we can loop easily.
  const availableForward = pageCount - currentPage;
  const availableBack = currentPage - 1;

  const numPagesToShow = 10;
  const halfPagesToShow = numPagesToShow / 2;

  let numPagesBefore = 0;
  let numPagesAfter = 0;

  if (availableForward < halfPagesToShow) {
    numPagesAfter = availableForward;
    numPagesBefore = numPagesToShow - availableForward;
  } else if (availableBack < halfPagesToShow) {
    numPagesAfter = numPagesToShow - availableBack - 1;
    numPagesBefore = availableBack;
  } else {
    numPagesAfter = halfPagesToShow - 1;
    numPagesBefore = halfPagesToShow;
  }

  return {
    firstVisiblePageNumber: Math.max(currentPage - numPagesBefore, 1),
    lastVisiblePageNumber: Math.min(currentPage + numPagesAfter, pageCount)
  };
};

export default PdxPaginator;
export { getFirstAndLastVisiblePageNumbers };
