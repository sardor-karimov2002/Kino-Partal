import React from 'react';
import { Pagination } from '@mui/material';

const PaginationComponents = ({setActivePage,totalPages}) => {
  return (
    <div>
      <Pagination
        onChange={(_, num) => setActivePage(num)}
        count={totalPages}
        variant="outlined"
        shape="rounded"
      />

    </div>
  );
}

export default PaginationComponents;
