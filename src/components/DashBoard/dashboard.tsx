import { Summary } from '../Summary/summary';
import { TransactionsTable } from '../TransactionsTable/transactionsTable';
import { DashBoardContainer } from './dashboardStyle';

export function Dashboard() {
  return (
    <>
      <DashBoardContainer>
        <Summary />
        <TransactionsTable />
      </DashBoardContainer>
    </>
  );
}
